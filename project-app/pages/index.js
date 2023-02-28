//Importing packages
import Head from "next/head";
import dynamic from "next/dynamic";

//Importing Components
import NavbarHome from "../components/Navbar/NavbarHome";
import LandingBanner from "../components/Landing/Landing";
import Stats from "../components/Stats/Stats";
import OurMission from "../components/OurMission/OurMission.jsx";
import NavGetInvolved from "../components/NavGetInvolved/NavGetInvolved"
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Weather from "../components/Weather/Weather";
import Footer from "../components/Footer/Footer";

//Leaflet specific as otherwise does not play nicely with Next.js
const MapWithNoSSR = dynamic(() => import("../components/Map/Map.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Clean-Up | Home</title>
      </Head>
      <div className="overflow-hidden font-sans">
        <NavbarHome />
        <LandingBanner />
        <Stats />
        <a id="about" className="flex invisible pb-[50px]"></a>
        <OurMission />
        <a id="get-involved" className="flex invisible pb-[50px]"></a>
        <NavGetInvolved/>
        <ImageGallery />
        {/* map container for sizing */}
        <div className=" ml-1 mr-1 mt-4 mb-16">
          <a id="map" className="flex invisible pb-[50px]"></a>
          <h2 className="text-lg sm:text-xl md:text-4xl text-[#004F54] font-bold ml-6">
            Join a Clean-Up
          </h2>
          <h3 className="ml-4 sm:ml-6 mb-2 text-sm sm:text-lg rounded-md text-[#ffffff] bg-[#FF9505] w-11/12 sm:w-[30rem] p-1 text-center">
          Find a marker and click to reveal clean-up details
        </h3>
          {/* <a id="weather" className="flex invisible pb-[50px]" ></a> */}
          <MapWithNoSSR />
        </div>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
