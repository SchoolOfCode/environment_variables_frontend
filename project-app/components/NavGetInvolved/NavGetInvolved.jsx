import NavButton from "../Landing/NavButton/NavButton";
import Link from "next/link";

const NavGetInvolved = () => {
  return (
    <div className="p-11 bg-[#F1F3F3] w-full shadow-lg flex justify-center">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[3em] space-y-[2rem] mt-[2rem] mb-[2rem] md:space-y-[0]">
          <Link href="#map">
            <a>
              <NavButton
                buttonText="Join A Clean"
                className="flex items-center justify-center"
              />
            </a>
          </Link>
          <Link rel="noopener noreferrer" href="/start-a-clean">
            <a>
              <NavButton
                buttonText="Start A Clean"
                className="flex items-center justify-center"
              />
            </a>
          </Link>
          <Link rel="noopener noreferrer" href="/log-a-clean">
            <a>
              <NavButton
                buttonText="Log A Clean"
                className="flex items-center justify-center"
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-center text-[#FF9505] text-[18px] text-center font-medium">
          <p>
            If you would like to join a clean-up in your area, click{" "}
            <strong>"Join A Clean"</strong>, and sign up by joining an existing
            clean on the map. Start a clean-up in your area by clicking the{" "}
            <strong>"Start A Clean"</strong> button. If you have hosted an
            event, make sure to log the results of your hard work via the{" "}
            <strong>"Log A Clean"</strong> button to update the project with how
            many bags were collected and how many people took part.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavGetInvolved;
