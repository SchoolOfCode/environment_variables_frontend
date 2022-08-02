import NavButton from "./NavButton/NavButton.jsx";
import Link from "next/link";

const LandingBanner = () => {
  return (
    <div
      id="home"
      className="bg-hero-background min-h-screen hero-image bg-right-bottom bg-cover flex mt-[4rem]">
      <div className="relative container mx-auto p-4 flex items-center justify-center z-10 h-48 w-2/4 mt-[10rem]">
        <div>
          <div className="flex flex-col justify-center items-center text-center w-[50em]">
            <h1 className="text-[#004F54] flex justify-center text-[70px] font-semibold leading-none align-center mt-[3em] mb-[1em] mt-[4em]">
              Project Clean-Up
            </h1>
            <div className="flex flex-row items-center justify-center space-x-[2em]">
              <Link href="#map">
                <a>
                  <NavButton buttonText="Join A Cleanup" className="flex items-center justify-center"/>
                </a>
              </Link>
              <Link target="_blank"
                  rel="noopener noreferrer"
                  href="/start-a-clean">
                <a>
                  <NavButton buttonText="Start A Cleanup" className="flex items-center justify-center"/>
                </a>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
