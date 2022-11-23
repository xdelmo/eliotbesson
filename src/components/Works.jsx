import React from "react";
import { worksInfo } from "../constants";
import Work from "./Work";

function Works() {
  return (
    <div id="works" className="bg-primary rounded-t-3xl">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white wrapper">
        <h2 className="text-center uppercase hero font-montserrat">
          Selected Works
        </h2>
        <p className="flex items-center justify-center font-ppmori">
          2020 <span className="line"></span>
          2022
        </p>
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
