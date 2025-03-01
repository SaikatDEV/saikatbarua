import React, { useState } from "react";
import sblogo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import PopModal from "./PopModal";

function AboutMe({ theme }) {
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

  return (
    <div
      class="h-[93vh] sm:min-h-[93vh] px-4 lg:px-40 w-full overflow-hidden font-['Nunito']"
      style={{ backgroundColor: theme === "dark" ? "#111" : "#a9c2ef" }}
    >
      {/**This is the linkedin, github, stackoverflow section */}
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
              Software Developer
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
          className="text-2xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] 
          hover:bg-gray-100 font-semibold py-2 px-4 border-none rounded-md group 
          text-white transform transition duration-200 hover:scale-110"
          onClick={scrollToLatestWorks}
        >
          Latest Works
        </button>

        <FontAwesomeIcon icon={faArrowDownLong} className="text-3xl mt-4" />
      </div>

      {/* Modal Popup */}
      <PopModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default AboutMe;
