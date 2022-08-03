import React from "react";
import Style from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div className={Style.missionContainer}>
      <div className={Style.textContainer}>
        <h2 className={Style.missionTitle}>Our Mission</h2>
        <p className={Style.missionParagraph}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <img
        className={Style.imageStyling}
        src="https://www.countrywidegrounds.com/wp-content/uploads/jch-optimize/ng/wp-content_uploads_2020_02_Litter-picking-and-fly-tipping-300x200.webp"
      />
    </div>
  );
};

export default OurMission;
