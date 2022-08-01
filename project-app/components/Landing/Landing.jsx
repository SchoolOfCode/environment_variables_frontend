import NavButton from "./NavButton/NavButton.jsx";

const LandingBanner = () => {
  return (
    <div
      id="home"
      className="bg-hero-background min-h-screen hero-image bg-right-bottom bg-cover flex mt-[4rem]"
    >
      <div className="relative container mx-auto p-4 flex items-center justify-center z-10 h-48 w-2/4 mt-[10rem]">
        <div>
          <div className="flex flex-col justify-center items-center text-center w-[50em] bg-[red]" >
            <h1 className="flex justify-center text-6xl text-[#004F54] font-semibold text-gray-900 leading-none align-center mt-[5em] ">
              Project Clean-Up
            </h1>
            <div className="flex flex-row items-center justify-center">
              <NavButton buttonText="Join A Cleanup" className="flex items-center justify-center ml-[5em]"/>
              <NavButton buttonText="Start A Cleanup" className="flex items-center justify-center mr-[5em] "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
