import React from "react";
import macbook1 from "../../assets/images/macbook_buddhist.webp";
import macbook2 from "../../assets/images/macbook_saikat.webp";

function LatestWorks({ theme }) {
  // Scroll to the Lets connect
  const scrollToletsConnect = () => {
    const section = document.getElementById("letsConnect");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="latestWorks"
      className="sm:min-h-[100vh] sm:w-full w-[100vw] -mt-3
        overflow-x-hidden mx-auto px-4 md:px-10 lg:px-24 custom-lg:px-40 relative"
      style={{ backgroundColor: theme === "dark" ? "#111" : "#849bc5" }}
    >
      <h2
        class="text-4xl w-max mx-auto text-center font-bold 
          border-b-2 relative z-10 pt-4 sm:pt-6"
        style={{
          borderColor: "#416ea4",
          backgroundColor: theme === "dark" ? "#111" : "#849bc5",
          color: theme === "dark" ? "#7ba7dd" : "white",
        }}
      >
        Latest Works
      </h2>

      {/** This is the buddhist Campus Website-------------------------------*/}
      <div class="flex gap-[80px] items-center pt-10 relative flex-col sm:flex-row">
        {/** This is the Horizontal Line */}
        <div
          className="horizontal-line hidden sm:block"
          style={{
            right: "50%",
            left: "10%",
          }}
        ></div>

        {/** This is the small Circle */}

        <div
          class="w-4 h-4 rounded-full border-[3px] hidden sm:block
              absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 
              hover:scale-110 ease-in-out duration-100"
          style={{ borderColor: "#fc815c" }}
        ></div>

        <a
          href="https://buddhistcampus.netlify.app/"
          class="w-full flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative group mr-auto">
            {/** tooltip which is behind the Image*/}
            <span
              class="hidden sm:flex group-hover:-top-14 ease-jump
                      duration-200 absolute left-1/2 -translate-x-1/2
                      top-4 text-white px-4 py-2 rounded w-max items-center gap-1 
                      after:content-[''] after:absolute after:left-1/2 
                      after:-translate-x-1/2 after:-bottom-2 
                      after:w-4 after:h-4 after:bg-inherit after:rotate-45"
              style={{
                backgroundColor: theme === "dark" ? "#fc815c" : "#000000",
              }}
            >
              Buddhist Campus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              class="max-w-[400px] lg:max-w-[450px] custom-lg:max-w-[500px] mr-auto hover:scale-110 ease-in-out 
                duration-200 relative mt-4"
              style={{ filter: "drop-shadow(0 0 60px rgba(59,130,246,0.5))" }}
              src={macbook1}
              alt="macbook1"
            />
          </div>
        </a>
        <div class="sm:w-full -mt-12 sm:mt-0">
          <a href="https://buddhistcampus.netlify.app/" target="_blank">
            <h3
              class="font-bold text-4xl"
              style={{ color: theme === "dark" ? "#fc815c" : "#000000" }}
            >
              Buddhist Campus
            </h3>
          </a>
          <span
            class="text-lg"
            style={{ color: theme === "dark" ? "#fc815c" : "#000000" }}
          >
            (A Path to Better Life)
          </span>
          <p class="text-justify my-4">
            Welcome to Path to Better Life, your comprehensive hub for all
            things related to Buddhism, meditation, and spiritual growth. This
            platform is designed to unite Buddhists and seekers worldwide,
            offering a treasure trove of resources and connections.
          </p>

          {/* Technology Tags Section */}
          <div class="flex flex-wrap gap-3 justify-start">
            {[
              "javascript",
              "react.js",
              "context-api",
              "html",
              "css",
              "sass",
              "tailwind",
              "bootstrap",
              "material-ui",
              "git",
              "github",
            ].map((tech, index) => (
              <span
                key={index}
                class="bg-[#4b5563] text-white px-4 py-2 rounded-md text-md hover:scale-110 transition duration-300"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/** This is the Initial Portfolio Website------------------------------------*/}
      <div class="flex sm:flex-row flex-col gap-[80px] items-center pt-16 relative w-full">
        <div class="w-full">
          <a href="https://saikatbarua-portfolio.netlify.app/" target="_blank">
            <h3 class="text-[#ffe578] font-bold text-4xl">
              My Initial Portfolio
            </h3>
          </a>
          <span class="text-[#ffe578] text-lg">(Portfolio)</span>
          <p class="text-justify my-4">
            This is my initial portfolio project, showcasing my skills and work
            experience as a web developer.
          </p>

          {/* Technology Tags Section */}
          <div class="flex flex-wrap gap-3 justify-start relative">
            {[
              "javascript",
              "react.js",
              "context-api",
              "html",
              "css",
              "sass",
              "tailwind",
              "bootstrap",
              "material-ui",
              "git",
              "github",
            ].map((tech, index) => (
              <span
                key={index}
                class="bg-[#4b5563] text-white px-4 py-2 rounded-md text-md hover:scale-110 transition duration-300"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/** This is the Horizontal Line */}
        <div
          className="horizontal-line hidden sm:block"
          style={{
            right: "10%",
            left: "50%",
          }}
        ></div>
        {/** This is the small Circle */}
        <div
          class="w-4 h-4 rounded-full border-[3px] hidden sm:block
                        absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 
                        hover:scale-110 ease-in-out duration-100"
          style={{ borderColor: "#ffe578" }}
        ></div>

        <a
          href="https://saikatbarua-portfolio.netlify.app/"
          class="w-full flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative group ml-auto">
            {/** tooltip which is behind the Image*/}
            <span
              class=" hidden sm:flex group-hover:-top-14 ease-jump
                        duration-200 bg-[#ffe578] absolute left-1/2 -translate-x-1/2
                        top-4 text-black px-4 py-2 rounded w-max items-center gap-1 
                        after:content-[''] after:absolute after:left-1/2 
                        after:-translate-x-1/2 after:-bottom-2
                        after:w-4 after:h-4 after:bg-inherit after:rotate-45"
            >
              My Initial Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              class="max-w-[400px] lg:max-w-[450px] custom-lg:max-w-[500px] mr-auto 
              hover:scale-110 ease-in-out
              duration-200 relative -mt-10 sm:mt-4 mb-8 sm:mb-4"
              style={{ filter: "drop-shadow(0 0 60px rgba(59,130,246,0.5))" }}
              src={macbook2}
              alt="macbook2"
            />
          </div>
        </a>
      </div>

      {/** This the vertical Line */}
      <div
        class="w-[2px] absolute top-0 left-1/2 hidden sm:block"
        style={{ backgroundColor: "#416ea4", bottom: "40px" }}
      ></div>
      <button
        className="text-2xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] 
        hover:bg-gray-100 font-semibold py-2 px-4 border-none rounded-md 
        text-white transform transition duration-200 hover:scale-110 mb-6
        left-1/2 -translate-x-1/2 absolute bg-[#111] bottom-3 hidden sm:block"
        // style={{ bottom: "12px" }}
        onClick={scrollToletsConnect}
      >
        Let's Connect
      </button>
    </section>
  );
}

export default LatestWorks;
