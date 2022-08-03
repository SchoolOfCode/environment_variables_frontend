import NavButton from "./NavButton/NavButton.jsx";
import Link from "next/link";


const LandingBanner = () => {
  return (
    <div
      id="home"
      className="bg-hero-background min-h-screen hero-image bg-right-bottom bg-cover flex mt-[4rem]"
    >
      <div className="relative container mx-auto p-4 flex items-center justify-center z-10 h-48 w-2/4 mt-[10rem]">
        <div>
          <div className="flex flex-col justify-center items-center text-center w-[50em]">
            <h1 className="text-[40px] sm:text-[75px] text-[#004F54] flex justify-center font-semibold leading-none align-center mt-[3em] mb-[1em] mt-[4em]">
              Project Clean-Up
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[2em] space-y-[3em] md:space-y-[0]">
              <Link href="#map">
                <a>
                  <NavButton
                    buttonText="Join Cleanup"
                    className="flex items-center justify-center"
                  />

                </a>
              </Link>
              <Link rel="noopener noreferrer" href="/start-a-clean">
                <a>
                  <NavButton
                    buttonText="Start Cleanup"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>
              <Link rel="noopener noreferrer" href="/log-a-clean">
                <a>
                  <NavButton
                    buttonText="Log Cleanup"
                    className="flex items-center justify-center"
                  />
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
