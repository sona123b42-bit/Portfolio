"use client";

export default function Navigation({ handelClick, isOpen, setIsOpen }) {
  return (
    <>
      <nav className="relative z-50 text-lg  flex items-center justify-between px-6 py-4">
        {/* Desktop Nav */}
        <div className="hidden items-center space-x-10 uppercase text-gray-700 md:flex">
          <a
            href="#about"
            className="tracking-widest hover:text-blue-500 transition-colors"
          >
            about
          </a>
          <a
            href="#skills"
            className="tracking-widest hover:text-blue-500 transition-colors"
          >
            skills
          </a>
          <a
            href="#portfolio"
            className="tracking-widest hover:text-blue-500 transition-colors"
          >
            portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-2 text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 transition-colors rounded-lg"
          >
            contact
          </a>
        </div>

        <button
          id="menu-btn"
          onClick={handelClick}
          className={`absolute right-6 z-[60] block md:hidden focus:outline-none hamburger ${
            isOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>

      <div
        id="menu"
        className={`fixed inset-0 z-40 flex flex-col items-center w-full h-screen px-6 py-4 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 bg-veryDarkBlue transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a
          href="#about"
          className="w-full py-3 text-center block hover:text-softRed transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className="w-full py-3 text-center block hover:text-softRed transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className="w-full py-3 text-center block hover:text-softRed transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="w-full py-3 text-center block hover:text-softRed transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </>
  );
}
