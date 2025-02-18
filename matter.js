var m; // Declare m globally

// Polling function to check for canvas existence
let retryCount = 0;
const maxRetries = 25; // (5 seconds / 200ms per retry = 25 retries)

function waitForCanvas() {
  if (retryCount >= maxRetries) {
    console.warn("Matter.js did not load within 5 seconds. Stopping retries.");
    return; // Stop recursion after max retries
  }

  var canvasWrapper = document.querySelector("#wrapper-canvas");

  if (canvasWrapper) {
    console.log("Canvas found, starting Matter.js...");
    runMatter();
  } else {
    console.warn("Canvas not found, retrying in 200ms...");
    retryCount++; // Increment retry counter
    setTimeout(waitForCanvas, 200); // Retry after 200ms
  }
}

// Ensure Matter plugins are loaded
Matter.use("matter-attractors");
Matter.use("matter-wrap");

function runMatter() {
  var canvasWrapper = document.querySelector("#wrapper-canvas");

  if (!canvasWrapper) {
    console.error("Canvas wrapper not found, creating dynamically...");
    canvasWrapper = document.createElement("div");
    canvasWrapper.id = "wrapper-canvas";
    document.body.appendChild(canvasWrapper);
  }

  var dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  var engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  if (canvasWrapper.querySelector("canvas")) {
    canvasWrapper.innerHTML = "";
  }

  var render = Render.create({
    element: canvasWrapper,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  if (!canvasWrapper.contains(render.canvas)) {
    canvasWrapper.appendChild(render.canvas);
  }

  var runner = Runner.create();
  var world = engine.world;
  world.gravity.scale = 0;

  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      render: {
        fillStyle: `#000`,
        strokeStyle: `#000`,
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (var i = 0; i < 100; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s =
      Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    let polygonNumber = Common.random(3, 6);

    // let colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
    let colors = ["#2e2a2b", "#3b372f", "#2c3027", "#3c4043", "#2b292f"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    var body = Bodies.polygon(x, y, polygonNumber, s, {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: randomColor,
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });

    World.add(world, body);
  }

  var mouse = Mouse.create(render.canvas);
  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
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

// Resize Handler
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Window resizing logic
function setWindowSize() {
  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  if (m && m.render) {
    m.render.canvas.width = dimensions.width;
    m.render.canvas.height = dimensions.height;
  }
}

// Expose runMatter to window for React
window.runMatter = waitForCanvas;

window.addEventListener("resize", debounce(setWindowSize, 250));

// Trigger the canvas check when DOM is ready
document.addEventListener("DOMContentLoaded", waitForCanvas);
