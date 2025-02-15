import React, { useState } from "react";
import sblogo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import macbook1 from "../../assets/images/macbook_buddhist.webp";
import macbook2 from "../../assets/images/macbook_saikat.webp";
import PopModal from "./PopModal";

function LatestWorks() {
  // This state is for modal open or close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // We always need a event handler while there is any action happens,
  // And this will update states for that action.
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Scroll to the section below
  const scrollToLatestWorks = () => {
    const section = document.getElementById("latestWorks");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to the Lets connect
  const scrollToletsConnect = () => {
    const section = document.getElementById("letsConnect");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/**This is the linkedin, github, stackoverflow section */}
      <div class="bg-[#111] h-[92vh] sm:min-h-[92vh] px-4 lg:px-40 w-full overflow-hidden font-['Nunito']">
        {/** links */}
        <ul class="z-10 ml-5 sm:ml-20 flex flex-col gap-8 translate-y-1/2 sm:translate-y-[80%] text-slate-300">
          <li class="w-8 hover:text-white transform transition duration-300 hover:scale-125">
            <a
              href="https://www.linkedin.com/in/saikat-barua-mcitp-icp-csm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </a>
          </li>
          <li class="w-8 hover:text-white transform transition duration-300 hover:scale-125">
            <a
              href="https://github.com/SaikatDEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  fill="currentColor"
                  d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
                />
              </svg>
            </a>
          </li>
          {/**Stackoverflow Icon*/}
          <li class="w-8 hover:text-white transform transition duration-300 hover:scale-125">
            <a
              href="https://stackoverflow.com/users/3434387/saikat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"
                  fill="currentColor"
                />
                <path
                  d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          {/**Mail Icon*/}
          <li class="w-8 hover:text-white transform transition duration-300 hover:scale-125">
            <a
              href="mailto:devsaikat00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </li>
          <li class="w-8 hover:text-white transform transition duration-300 hover:scale-125">
            <a href="https://t.me/saikatdev00" target="_blank">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                class="w-8 text-slate-300 hover:text-white transform transition duration-300 hover:scale-110"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 448 512"
                className="z-10"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

        {/** About me */}
        <section className="flex flex-col sm:flex-row items-center relative left-[20%] md:left-[10%] -top-36 sm:top-0">
          <div className="ml-0 sm:ml-40 ">
            <img
              src={sblogo}
              alt="Logo"
              className="hidden sm:block pointer-events-none w-32 sm:w-full sm:min-w-60 
              lg:min-w-96 sm:-translate-y-1/3 sm:translate-x-1/2  max-sm:-translate-y-[20vh]"
              style={{ filter: "drop-shadow(0 0 60px rgba(59,130,246,0.5))" }}
            />
          </div>

          <div className="z-10 flex flex-col place-items-start mb-[220px] sm:mb-[450px] lg:mb-[300px] space-y-8 sm:space-y-6 absolute left-[10%]">
            <div className="pointer-events-none space-y-2">
              <h1 className="pointer-events-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Spartan']">
                Saikat Barua
              </h1>
              <h3 className="pointer-events-none text-xl sm:text-2xl md:text-3xl font-semibold italic font-['Roboto']">
                Front-end Developer
              </h3>
            </div>
            <div className="flex flex-col sm:flex-col gap-32 items-center">
              <button
                className="text-2xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:bg-gray-100 font-semibold py-2 px-4 border-none rounded-md group text-white transform transition duration-200 hover:scale-110"
                onClick={toggleModal}
              >
                About Me
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-3xl translate-x-8 transform transition duration-200 group-hover:translate-x-12"
                />
              </button>
            </div>
          </div>
        </section>

        {/** latest works */}
        <div className="w-max mx-auto mt-80 sm:mt-0 sm:-translate-y-12 lg:-translate-y-20 flex flex-col items-center">
          <button
            className="text-2xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:bg-gray-100 font-semibold py-2 px-4 border-none rounded-md group text-white transform transition duration-200 hover:scale-110"
            onClick={scrollToLatestWorks}
          >
            Latest Works
          </button>
          <FontAwesomeIcon icon={faArrowDownLong} className="text-3xl mt-4" />
        </div>

        {/* Modal Popup */}
        <PopModal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
      {/**This is the latest work section -------------------------------------- */}
      <section
        id="latestWorks"
        className="bg-[#111] sm:min-h-[100vh] sm:w-full w-[100vw] 
        overflow-x-hidden mx-auto px-4 md:px-10 lg:px-24 custom-lg:px-40 relative"
      >
        <h2
          class="text-4xl w-max mx-auto text-center font-bold 
          border-b-2 bg-[#111] relative z-10"
          style={{ borderColor: "#416ea4", color: "#7ba7dd" }}
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
                      duration-200 bg-[#fc815c] absolute left-1/2 -translate-x-1/2
                      top-4 text-white px-4 py-2 rounded w-max items-center gap-1 
                      after:content-[''] after:absolute after:left-1/2 
                      after:-translate-x-1/2 after:-bottom-2 
                      after:w-4 after:h-4 after:bg-inherit after:rotate-45"
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
          <div class="sm:w-full">
            <a href="https://buddhistcampus.netlify.app/" target="_blank">
              <h3 class="text-[#fc815c] font-bold text-4xl">Buddhist Campus</h3>
            </a>
            <span class="text-[#fc815c] text-lg">(A Path to Better Life)</span>
            <p class="text-justify my-4">
              Welcome to Path to Better Life, your comprehensive hub for all
              things related to Buddhism, meditation, and spiritual growth. This
              platform is designed to unite Buddhists and seekers worldwide,
              offering a treasure trove of resources and connections.
            </p>

            {/* Technology Tags Section */}
            <div class="flex flex-wrap gap-3 justify-center sm:justify-start">
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
            <a
              href="https://saikatbarua-portfolio.netlify.app/"
              target="_blank"
            >
              <h3 class="text-[#ffe578] font-bold text-4xl">
                My Initial Portfolio
              </h3>
            </a>
            <span class="text-[#ffe578] text-lg">(Portfolio)</span>
            <p class="text-justify my-4">
              This is my initial portfolio project, showcasing my skills and
              work experience as a web developer.
            </p>

            {/* Technology Tags Section */}
            <div class="flex flex-wrap gap-3 justify-center sm:justify-start relative">
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
                class="max-w-[400px] lg:max-w-[450px] custom-lg:max-w-[500px] mr-auto hover:scale-110 ease-in-out 
              duration-200 relative mt-4"
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
          style={{ backgroundColor: "#416ea4", bottom: "12px" }}
        ></div>
        <button
          className="text-2xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] 
        hover:bg-gray-100 font-semibold py-2 px-4 border-none rounded-md 
        text-white transform transition duration-200 hover:scale-110
        left-1/2 -translate-x-1/2 absolute bg-[#111] bottom-3"
          // style={{ bottom: "12px" }}
          onClick={scrollToletsConnect}
        >
          Let's Connect
        </button>
      </section>
      {/** This is the Lets Connect Section */}
      <section
        id="letsConnect"
        class="bg-[#111939] sm:px-10 md:px-32 lg:px-44 h-[64vh] flex flex-col md:flex-row justify-center items-center"
      >
        <div class="w-full mt-4">
          <img src="/src/assets/images/connect.png" alt="connect" />
        </div>
        <div class="w-full mb-10">
          <form class="max-w-sm mx-auto">
            <div class="mt-4">
              <label
                for="username-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="username-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name here"
                ></input>
              </div>
            </div>
            <div class="mt-4">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="youremail@email.com"
                ></input>
              </div>
            </div>
            <div class="mt-4">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default LatestWorks;
