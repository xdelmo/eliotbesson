import React from "react";

function Cookies(props) {
  // Function to start game with questions'div
  function handleClick() {
    props.setCookiesBanner((prevState) => !prevState);
  }
  return (
    <div className="flex items-center justify-center font-ppmori ">
      <div className="fixed z-30 flex items-center justify-center bottom-4">
        <div className="flex flex-row items-start justify-center gap-4 p-8 border-2 border-white border-solid rounded-full bg-primary wrapper">
          <p className="text-xs text-white">
            This website use cookies. By continuing to browse this site you are
            agreeing to the{" "}
            <a href="#" className="underline hover:text-lightDesaturated">
              privacy policy
            </a>
            .
          </p>
          <button
            className="flex items-center justify-center flex-1 w-8 h-8 p-6 text-white rounded-full bg-lightDesaturated hover:opacity-80"
            onClick={handleClick}
          >
            <span>x</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
