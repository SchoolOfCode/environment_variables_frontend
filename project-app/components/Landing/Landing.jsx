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
            <h1 className="text-[40px] sm:text-[80px]  text-[#004F54] flex justify-center font-semibold leading-none align-center mt-[3em] ">
              Project Clean-Up
            </h1>
            <hr className="flex items-center sm:w-[55rem] h-0.5 bg-[#004e5491] mb-[2rem]"></hr>
            <div className="flex items-center w-[20rem] sm:w-[35rem] text-[15px] sm:text-[20px] text-[#004F54]">
              <p>
                Project Clean-Up is a place where you can join others to improve
                the environment by creating or joining litter clean-ups. They
                can be done anywhere—from beaches, rivers, and even national
                parks, to your very own neighbourhood!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[3em] space-y-[2rem] mt-[2rem] md:space-y-[0]">
              <Link href="#about">
                <a>
                  <NavButton
                    buttonText="Learn More"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>
              <Link rel="noopener noreferrer" href="#get-involved">
                <a>
                  <NavButton
                    buttonText="Get Involved"
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
