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
  const url = "http://localhost:5000/startclean";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[#E6E5E4]">
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
        <div className=" w-full  sm:w-1/2 ml-4 mr-4 sm:mr-0 mt-4 mb-16">
          <a id="map" className="flex invisible pb-[100px]"></a>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#004F54] font-bold">
            Find a cleanup near you...
          </h2>
          <MapWithNoSSR />
          <a id="weather" className="flex invisible"></a>
        </div>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
