import React from "react";

function Work(props) {
  return (
    <div className={`${props.bgColor} font-montserrat`}>
      <div className="text-white min-h-screen p-4 py-20 flex flex-col justify-center items-center">
        <div className="justify-center items-center flex flex-col">
          {/* <picture className="work-img"> */}
          {/* <source
                type="image/webp"
                srcSet={`./assets/${props.img}.webp`}
                className="rounded-3xl object-cover"
              /> */}
          <img
            src={`./assets/${props.img}.png`}
            alt="works"
            className="rounded-3xl work-img"
          />
          {/* </picture> */}
          <div className="flex flex-col justify-center items-center uppercase">
            <h2 className="work uppercase font-montserrat letter-spacing-xs mt-8">
              {`${props.name}`}
            </h2>
            {props.tags.map((tag) => (
              <p className="font-ppmori">{tag}</p>
            ))}
            <p className="text-white letter-spacing-xs leading-5 uppercase hover-underline-animation-light mt-8 up-letters-animation font-ppmori">
              <a href={props.link}>Scroll to explore</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
