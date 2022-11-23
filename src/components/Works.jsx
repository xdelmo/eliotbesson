import React from "react";
import { worksInfo } from "../constants";
import Work from "./Work";

function Works() {
  return (
    <div id="works">
      <div className="bg-primary rounded-t-3xl">
        <div className="text-white min-h-screen p-4 flex flex-col justify-center items-center">
          <div className="hero flex flex-col flex-shrink justify-center items-center uppercase font-montserrat">
            <h2>Selected</h2>
            <h2>Works</h2>
          </div>
          <p className="flex justify-center items-center font-ppmori">
            2020 <span className="line"></span>
            2022
          </p>
        </div>
      </div>
      {worksInfo.map((workInfo) => (
        <Work
          key={workInfo.id}
          name={workInfo.name}
          bgColor={workInfo.bgColor}
          img={workInfo.img}
          tags={workInfo.tags}
          link={workInfo.link}
        />
      ))}
    </div>
  );
}

export default Works;
