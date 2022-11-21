import React from "react";

function Hero() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-primary hero font-montserrat font-bold uppercase flex gap-1 flex-col letter-spacing-2xs stretch-vertycally my-12">
        <div>Eliot</div>
        <div className="mt-[-.75em] flex-shrink">Besson</div>
      </h1>

      <div className="text-primary letter-spacing-xs leading-5 uppercase flex flex-col gap-3">
        <p className="flex-1">
          i’m an independant digital <br /> designer & webflow expert <br />{" "}
          based in france
        </p>
        <p className="flex-1">
          focusing on creating purposeful user <br /> interfaces*
        </p>
        <p className="flex-1">
          * with a hint on <br /> interactions & animations
        </p>
      </div>

      <p className="text-primary letter-spacing-xs leading-5 uppercase hover-underline-animation mt-8">
        Scroll to explore
      </p>
    </div>
  );
}

export default Hero;
