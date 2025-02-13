import React, { useState, useEffect } from "react";
import profilePic from "../../assets/images/saikat.jpg"; // Path to the profile image

// PopModal Component - Displays a modal when "About Me" is clicked
function PopModal({ isOpen, onClose }) {
  // State to control animation (scale and fade effect)
  const [animate, setAnimate] = useState(false);

  // Effect to handle animation when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      // Trigger animation when modal opens
      setAnimate(true);
    } else {
      // Delay setting animate to false for smooth exit animation
      setTimeout(() => setAnimate(false), 300);
    }
  }, [isOpen]); // Depend on isOpen to trigger effect

  return (
    // Backdrop and Modal Wrapper
    // The modal uses scale and opacity for smooth opening/closing animations.
    // A bg-black bg-opacity-50 layer creates a dark overlay behind the modal.
    // Background overlay for modal (dark transparent backdrop)
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose} // Close modal if user clicks outside of content
    >
      {/* Modal Container - Responsive width and centered position
        Clicking the outer div (inset-0) triggers the onClose function.
        stopPropagation() prevents the modal from closing when clicking inside the content area. 
        w-11/12 for mobile (almost full width)
        sm:w-4/5 for tablets
        lg:w-3/5 for desktops
        xl:w-1/2 for large screens
        */}
      <div
        className={`bg-[#1f2937] p-8 rounded-lg w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 
        relative transform transition-all duration-300 ${
          isOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 hover:scale-125 transition duration-300"
        >
          &times;
        </button>

        {/* Main Modal Content Section */}
        <div
          className="flex flex-col sm:flex-row items-center gap-8 pt-4 
          sm:pt-0 overflow-y-scroll max-h-[80vh]"
        >
          {/* Profile Picture Section */}
          <div
            className="w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0 rounded-full 
            overflow-hidden border-4 border-[#4b5563]"
          >
            <img
              src={profilePic} // Display profile image
              alt="Profile"
              className="w-full h-full object-cover hover:scale-150 transition duration-300" // Ensure image covers entire container
            />
          </div>

          {/* Text and Technologies Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-5xl font-semibold font-['Open+Sans'] text-white mb-4">
              ABOUT ME
            </h2>
            <p className="text-lg text-gray-300 font-['Open+Sans'] leading-relaxed mb-6">
              I am a Technology-minded individual with a passion for Front End
              Web Development. As well expert on designing Test Automation
              Framework from scratch using Selenium or any other framework like
              GEB-Spock, Cucumber BDD, Serenity-BDD, PlayWright, Karate, Rspec,
              TestNG, RestAssured API, Jmeter, UiPath etc. <br /> <br />
              Technologies and tools that I use to create websites.
            </p>

            {/* Technology Tags Section */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {[
                "javascript",
                "react.js",
                "redux",
                "context-api",
                "node.js",
                "express.js",
                "mongoDB",
                "html",
                "css",
                "sass",
                "tailwind",
                "bootstrap",
                "material-ui",
                "git",
                "github",
                "aws",
                "figma",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#4b5563] text-white px-4 py-2 rounded-md text-md hover:scale-110 transition duration-300"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopModal;
