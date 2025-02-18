import { useEffect } from "react";
import Header from "../Header/Header";
import LatestWorks from "../Home/LatestWorks";
import AboutMe from "../Home/AboutMe";
import Connect from "../Home/Connect";

function LandingPage({ theme, setTheme }) {
  useEffect(() => {
    let matterLoaded = false;
    const timeout = setTimeout(() => {
      if (!matterLoaded) {
        console.warn("Matter.js did not load within 5 seconds. Skipping.");
        return;
      }
    }, 5000); // Stop trying after 5 seconds

    // Dynamically load matter.js after DOM mounts
    const script = document.createElement("script");
    script.src = "/matter.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      matterLoaded = true;
      clearTimeout(timeout); // Clear timeout if loaded within 5 seconds
      if (window.runMatter) {
        window.runMatter();
      } else {
        console.error("Matter.js failed to initialize.");
      }
    };
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      clearTimeout(timeout);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sm:min-h-[80vh] sm:w-full w-[100vw] overflow-x-hidden text-white">
      <div
        className="absolute w-full h-[100vh] inset-0"
        id="wrapper-canvas"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1))",
        }}
      ></div>
      <AboutMe theme={theme} setTheme={setTheme}></AboutMe>
      <LatestWorks theme={theme} setTheme={setTheme}></LatestWorks>
      <Connect theme={theme} setTheme={setTheme}></Connect>
    </div>
  );
}

export default LandingPage;
