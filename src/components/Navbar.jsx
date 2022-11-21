import React from "react";
import { navLinks } from "../constants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenu() {
    setIsMenuOpen((prevState) => !prevState);
    console.log(isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
  return (
    // Navbar
    <div>
      {" "}
      {!isMenuOpen ? (
        <nav className="flex text-primary  font-bold font-ppmori uppercase text-lg p-4 tracking-tighter">
          <a href="#" className=" text-primary font-ppmori letter-spacing-xs">
            EB
          </a>
          <div id="menuToggle" onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </nav>
      ) : (
        <div className="bg-primary h-screen text-lg  tracking-tighter ">
          <div id="menuToggle" onClick={handleMenu} className="p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <ul className="flex h-full flex-col text-white gap-2 justify-center">
            {navLinks.map((nav) => (
              <li key={nav.id} className="letter-spacing-xs flex">
                <span className=" text-2xs">/{nav.id}</span>
                <a href="#" className="text-3xl ml-2">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
