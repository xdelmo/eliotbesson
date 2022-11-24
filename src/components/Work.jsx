import React from "react";

function Work(props) {
  return (
    <div className={`${props.bgColor} font-bebas`}>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 text-white wrapper">
        <div className="flex flex-col items-center justify-center">
          {/* <picture className="work-img"> */}
          {/* <source
                type="image/webp"
                srcSet={`./assets/${props.img}.webp`}
                className="object-cover rounded-3xl"
              /> */}
          <img
            src={`./assets/${props.img}.png`}
            alt="works"
            className="rounded-3xl work-img"
          />
          {/* </picture> */}
          <div className="flex flex-col items-center justify-center uppercase">
            <h2 className="mt-8 uppercase work font-bebas letter-spacing-xs">
              {`${props.name}`}
            </h2>
            {props.tags.map((tag) => (
              <p key={tag} className="font-ppmori">
                {tag}
              </p>
            ))}
            <p className="mt-8 leading-5 text-white uppercase letter-spacing-xs hover-underline-animation-light up-letters-animation font-ppmori">
              <a href={props.link}>Scroll to explore</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
