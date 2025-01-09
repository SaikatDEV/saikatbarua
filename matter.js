var m;

// Ball Colors (Customize here)
const BALL_COLORS = [
  "#ff595e",
  "#ffca3a",
  "#8ac926",
  "#1982c4",
  "#6a4c93",
  "#f4a261",
  "#e76f51",
  "#d62828",
  "#003049",
  "#f77f00",
];

// Polling function to check for canvas existence
function waitForCanvas() {
  var canvasWrapper = document.querySelector("#wrapper-canvas");

  if (canvasWrapper) {
    console.log("Canvas found, starting Matter.js...");
    runMatter();
  } else {
    console.warn("Canvas not found, retrying in 200ms...");
    setTimeout(waitForCanvas, 200); // Retry every 200ms
  }
}

// Ensure Matter plugins are loaded
Matter.use("matter-wrap");

function runMatter() {
  var canvasWrapper = document.querySelector("#wrapper-canvas");

  if (!canvasWrapper) {
    canvasWrapper = document.createElement("div");
    canvasWrapper.id = "wrapper-canvas";
    canvasWrapper.style.position = "fixed";
    canvasWrapper.style.top = 0;
    canvasWrapper.style.left = 0;
    canvasWrapper.style.width = "100vw";
    canvasWrapper.style.height = "100vh";
    canvasWrapper.style.pointerEvents = "none"; // Click-through for links/buttons
    document.body.appendChild(canvasWrapper);
  }

  var dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Composite = Matter.Composite;

  var engine = Engine.create();
  engine.world.gravity.y = 0.05; // Slightly slower fall speed for gentle rain

  if (canvasWrapper.querySelector("canvas")) {
    canvasWrapper.innerHTML = "";
  }

  var render = Render.create({
    element: canvasWrapper,
    engine: engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  var runner = Runner.create();
  var world = engine.world;

  var balls = [];

  // Function to randomly spawn balls from the top
  function spawnBall() {
    let x = Common.random(50, render.options.width - 50);
    let size = Common.random(15, 30); // Smaller sizes for rain effect
    let color = BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)];

    var ball = Bodies.circle(x, -50, size, {
      isStatic: false,
      restitution: 0.6, // More bounce on bottom hit
      frictionAir: 0.01,
      render: {
        sprite: {
          texture: createBallTexture(size, color),
        },
      },
    });

    // Apply slight horizontal force for drift
    Matter.Body.setVelocity(ball, {
      x: Common.random(-1, 1),
      y: Common.random(1, 2),
    });

    // Add ball to world
    World.add(world, ball);
    balls.push(ball);
  }

  // Spawn balls continuously to resemble rain
  setInterval(() => {
    let randomCount = Common.random(5, 10); // Rain intensity (5-10 balls at a time)
    for (let i = 0; i < randomCount; i++) {
      spawnBall();
    }
  }, 800); // Rain drops every 0.8 seconds

  // Ball Removal at Bottom of Page
  Matter.Events.on(engine, "afterUpdate", function () {
    balls.forEach((ball) => {
      if (ball.position.y > dimensions.height + 30) {
        Composite.remove(world, ball);
        balls = balls.filter((b) => b !== ball);
      }
    });
  });

  // Ball Click Interaction - Removes ball on click
  window.addEventListener("click", function (event) {
    var mousePosition = {
      x: event.clientX,
      y: event.clientY,
    };

    var clickedBodies = Matter.Query.point(balls, mousePosition);

    if (clickedBodies.length > 0) {
      let ball = clickedBodies[0];
      Composite.remove(world, ball);
      balls = balls.filter((b) => b !== ball);
      showSplash(ball.position.x, ball.position.y, ball.render.fillStyle);
    }
  });

  // Splash Effect on Click
  function showSplash(x, y, color) {
    const splash = document.createElement("div");
    splash.style.position = "absolute";
    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;
    splash.style.width = "10px";
    splash.style.height = "10px";
    splash.style.borderRadius = "50%";
    splash.style.backgroundColor = color;
    splash.style.boxShadow = `0 0 20px 5px ${color}`;
    splash.style.transition = "transform 0.6s ease-out, opacity 0.6s";

    document.body.appendChild(splash);

    setTimeout(() => {
      splash.style.transform = "scale(6)";
      splash.style.opacity = "0";
    }, 100);

    setTimeout(() => {
      splash.remove();
    }, 700);
  }

  // Ball Texture (3D Effect)
  function createBallTexture(size, color) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = size * 2;
    canvas.height = size * 2;

    const gradient = ctx.createRadialGradient(size, size, 0, size, size, size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");

    ctx.globalAlpha = 0.85; // Slight transparency
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size, size, size, 0, 2 * Math.PI);
    ctx.fill();
    return canvas.toDataURL();
  }

  // Avoid clickable elements
  document.querySelectorAll("button, a").forEach((elem) => {
    elem.style.pointerEvents = "auto";
  });

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);

  return {
    engine,
    runner,
    render,
    canvas: render.canvas,
  };
}

// Expose runMatter globally
window.runMatter = waitForCanvas;

// Trigger canvas check when DOM is ready
document.addEventListener("DOMContentLoaded", waitForCanvas);
