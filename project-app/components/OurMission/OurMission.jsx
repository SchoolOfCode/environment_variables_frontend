import React from "react";
import Style from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div id="mission" className={Style.missionContainer}>
      <div className={Style.textContainer}>
        <h2 className="text-lg sm:text-xl md:text-4xl text-[#004F54] font-bold">What is Project Clean-Up?</h2>

        <p className={Style.missionParagraph}>
          Project Clean-Up enables you to start your own litter clean-up, or join an
          existing one. All you have to do is go to the {" "}
          <a href="#map" className="text-[#FF9505] underline font-medium">
          map
          </a>
          {" "}and search for a clean-up in any area you're interested in. If
          one is available, simply click the map marker, read the details, then
          go ahead and join that clean-up. If there aren't any, you could{" "}
          <a
            href="/start-a-clean"
            className="text-[#FF9505] underline font-medium"
          >
          {" "}start
          </a>{" "}
          one yourself!
        </p>
        <h3 className={Style.missionSubtitle}>
          Anyone can get involved
        </h3>
        <p className={Style.missionParagraph}>
          Get some friends together, make a family day of it, take your pupils
          out for an educational excursion, or even take your corporate team for
          an authentic team building experience. Whatever you choose, you will make a positive impact on the
          environment. There are many benefits from getting involved with a
          clean-up; not only are you making a massive difference to the planet,
          you are immersing yourself in the great outdoors, keeping active,
          and meeting new people—all at the same time.
        </p>
      </div>
      <img className={Style.imageStyling} src="./litter-sunset.jpg" />
    </div>
  );
};

export default OurMission;
