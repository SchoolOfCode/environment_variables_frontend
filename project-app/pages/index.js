import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
import dynamic from "next/dynamic";
import LandingBanner from "../components/Landing/Landing";
import Weather from "../components/Weather/Weather";
import OurMission from "../components/OurMission/OurMission.jsx";

import ImageGallery from "../components/ImageGallery/ImageGallery";

import Footer from "../components/Footer/Footer";

import Stats from "../components/Stats/Stats";

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
        <a id="about" className="flex invisible pb-[100px]"></a>
        <OurMission />

        <ImageGallery />
        {/* map container for sizing */}
        <div className=" ml-1 mr-1 mt-4 mb-16">
          <a id="map" className="flex invisible pb-[100px]"></a>

          <h2 className="text-lg ml-4 sm:text-xl md:text-2xl text-[#004F54] font-bold">
            Find a cleanup near you...
          </h2>
          <p className="ml-4 text-sm sm:text-lg text-[#004F54]">
            Find a marker and click to reveal cleanup details
          </p>
          <a id="weather" className="flex invisible"></a>
          <MapWithNoSSR />
        </div>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
