import React from "react";

function Work(props) {
  return (
    <div className={`${props.bgColor} font-montserrat`}>
      <div className="text-white min-h-screen p-4 flex flex-col justify-center items-center">
        <picture className="w-[150px]">
          {/* <source
            type="image/webp"
            srcSet={`./assets/${props.img}.webp`}
            className="rounded-3xl object-cover"
          /> */}
          <img
            src={`./assets/${props.img}.webp`}
            alt="works"
            className="rounded-3xl object-cover"
          />
        </picture>

        <div className="flex flex-col justify-center items-center uppercase">
          <h2 className="hero flex flex-col flex-shrink justify-center items-center uppercase font-montserrat letter-spacing-xs mt-8">
            {`${props.name}`}
          </h2>

          {props.tags.map((tag) => (
            <p className="font-ppmori">{tag}</p>
          ))}
          <p className="text-white letter-spacing-xs leading-5 uppercase hover-underline-animation-light mt-8 up-letters-animation">
            <a href={props.link}>Scroll to explore</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
