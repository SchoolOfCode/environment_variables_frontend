import React from "react";
import Style from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div id="mission" className={Style.missionContainer}>
      <div className={Style.textContainer}>
        <h2 className={Style.missionTitle}>What is Project Cleanup?</h2>

        <p className={Style.missionParagraph}>
          Project Clean-up allows you to start your own cleanup or join an
          existing one. All you have to do is go to the{" "}
          <a href="#map" className="text-[#FF9505] underline font-medium">
            map
          </a>
          , search for a cleanup in your area (or any area of interest) and if
          one is available, simply click the map marker, read the details, then
          go ahead and join that cleanup... or better yet,{" "}
          <a
            href="/start-a-clean"
            className="text-[#FF9505] underline font-medium"
          >
            start
          </a>{" "}
          one of your very own!
        </p>
        <h3 className={Style.missionSubtitle}>
          <em>Seal the deal...</em>
        </h3>
        <p className={Style.missionParagraph}>
          Once the cleanup event that you started is complete, go ahead and
          click the{" "}
          <a
            href="/log-a-clean"
            className="text-[#FF9505] underline font-medium"
          >
            log
          </a>{" "}
          button to fill out your form... add the name of your Cleanup, how many
          people attended, how many bags were collected and your figures will be
          added to our stats counter.
        </p>
        <h3 className={Style.missionSubtitle}>
          <em>Anyone can get involved...</em>
        </h3>
        <p className={Style.missionParagraph}>
          Get some friends together, make a family day of it, take your pupils
          out for an educational excursion or even take your corporate team for
          an authentic team-building day out....
        </p>
        <p className={Style.missionParagraph}>
          whichever you choose, you will be making a positive impact on the
          environment. There are so many benefits when getting involved with a
          cleanup... not only are you making a massive difference to the planet,
          you are also immersing yourself in the great outdoors, keeping active
          and meeting new people all at the same time.
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
