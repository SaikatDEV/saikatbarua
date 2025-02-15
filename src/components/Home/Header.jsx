import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-[#111]" id="top">
      <div className="flex flex-wrap items-center justify-between min-h-20 max-w-screen-xl mx-auto text-white px-6 sm:px-10">
        <div className="z-10 flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 pointer-events-none"
          />
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10 w-8 text-slate-300 hover:text-white transform transition duration-300 hover:scale-125"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10 hidden sm:block w-8 text-slate-300 hover:text-white transform transition duration-300 hover:scale-125"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
