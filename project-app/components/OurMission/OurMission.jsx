import React from "react";
import Style from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div className={Style.missionContainer}>
      <div className={Style.textContainer}>
        <h2 className={Style.missionTitle}>What is Project Cleanup</h2>
        <p className={Style.missionParagraph}>
          Project Cleanup is a place where you can make a difference to our
          environment by creating or joining litter cleanups.<br></br> They can
          be done anywhere from Beaches to Rivers or even National Parks to your
          very own neighbourhood!
        </p>
        <p className={Style.missionParagraph}>
          Project Cleanup allows you to <a href="/start-a-clean">start</a> your
          own cleanup or join an existing one. All you have to do is go to the{" "}
          <a href="#map">map</a>, look for a cleanup in your area (or any area
          of interest) and if one is available, simply click the map marker,
          read the details, then go ahead and join that cleanup...or better yet,
          start one of your very own!
        </p>
        <p className={Style.missionParagraph}>
          There are so many benefits when getting involved with a cleanup... not
          only are you making a massive difference to the planet, you are also
          immersing yourself in the great outdoors, keeping active and meeting
          new people all at the same time.
        </p>
        <br />
        <h3 className="text-xl text-[#004f54]">Anyone can do it...</h3>
        <p className={Style.missionParagraph}>
          Get some friends together, make a family day of it, take your pupils
          out for an educational, wholesome excursion or even take your
          corporate team for an authentic team-building day out....whichever you
          choose, you will be making a positive impact on the environment.
        </p>
        {/* 
        **POSSIBLE PARAGRAPH TO CONSIDER - PRIVATE CLEANS**
        <p className={Style.missionParagraph}>
          Unless you mark your cleanup as private (which we'd encourage you to
          consider against), anyone will be able to join which makes for an
          exciting day with endless friendship and networking opportunities.
        </p> */}
      </div>
      <img className={Style.imageStyling} src="./litter-sunset.jpg" />
    </div>
  );
};

export default OurMission;
