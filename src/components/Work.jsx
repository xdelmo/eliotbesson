import React from "react";

function Work(props) {
  console.log(props);
  console.log(props.tags);

  return (
    <div className={`${props.bgColor} font-montserrat`}>
      <div className="text-white min-h-screen p-4 flex flex-col justify-center items-center">
        <picture className="mb-8 max-w-xs">
          <source
            type="image/webp"
            srcSet={`./assets/${props.img}.webp`}
            className="rounded-3xl"
          />
          <img
            src={`./assets/${props.img}.webp`}
            alt="works"
            className="rounded-3xl"
          />
        </picture>

        <div className="flex flex-col justify-center items-center uppercase">
          <h2 className="hero flex flex-col flex-shrink justify-center items-center uppercase font-montserrat letter-spacing-xs ">
            {`${props.name}`}
          </h2>

          {props.tags.map((tag) => (
            <p className="font-ppmori">{tag}</p>
          ))}

          {/* <p className="font-ppmori">Branding</p>
          <p className="font-ppmori">UX/UI Design</p>
          <p className="font-ppmori">Webflow Development</p> */}
        </div>
      </div>
    </div>
  );
}

export default Work;
