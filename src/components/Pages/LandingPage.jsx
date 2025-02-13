import { useEffect } from "react";
import Header from "../Home/Header";
import LatestWorks from "../Home/LatestWorks";

function LandingPage() {
  useEffect(() => {
    // Dynamically load matter.js after DOM mounts
    const script = document.createElement("script");
    script.src = "/matter.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.runMatter) {
        window.runMatter();
      } else {
        console.error("Matter.js failed to initialize.");
      }
    };
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sm:min-h-[80vh] sm:w-full w-[100vw] overflow-x-hidden text-white">
      <Header></Header>
      <div
        className="absolute w-full h-[100vh] inset-0"
        id="wrapper-canvas"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1))",
        }}
      ></div>
      <LatestWorks></LatestWorks>
    </div>
  );
}

export default LandingPage;
