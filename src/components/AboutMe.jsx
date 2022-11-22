import React from "react";

function AboutMe() {
  return (
    <div className="Aboutme min-h-screen p-4 py-20 flex flex-col justify-center items-start text-primary rounded-b-3xl round uppercase">
      <h3 className="font-ppmori font-thin mb-2 text-primary letter-spacing-xs leading-5 ">
        A little more about me
      </h3>
      <div className="flex gap-6 flex-col">
        <p className="font-montserrat work letter-spacing-2xs leading-none uppercase">
          Bonjour! <br></br> I’m eliot, independant <br></br> digital designer,
          and <br></br> webflow expert, <br></br>
          living on planet <br></br>
          earth{" "}
          <img
            className="aboutme-img"
            src="/assets/globe.png"
            alt="globe"
          />{" "}
          since 1997.
        </p>
        <p className="font-montserrat work letter-spacing-2xs leading-none uppercase">
          i have +5 years of XP. <br /> in designing digital <br /> products,{" "}
          <img
            className="aboutme-img"
            src="/assets/macbook.png"
            alt="macbook"
          />
          with A <br /> strong focus on user <br /> interface.
        </p>
      </div>
      <p className="text-primary letter-spacing-xs leading-5 uppercase hover-underline-animation mt-8 up-letters-animation">
        Learn more
      </p>
    </div>
  );
}

export default AboutMe;
