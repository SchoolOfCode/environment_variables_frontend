import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
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
    <div className="bg-[#E6E5E4]">
      <Head>
        <title>Project Clean-Up | Home</title>
      </Head>
      <div className="overflow-hidden font-sans">
        <Navbar />
        <LandingBanner />
        <Stats />

        <OurMission />

        <ImageGallery />
        <div className=" w-3/5 ml-4 mr-4 mt-4 mb-16">
          <h2 className="text-3xl text-[#004F54] font-bold">
            Find a cleanup near you...
          </h2>
          <MapWithNoSSR />
        </div>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
