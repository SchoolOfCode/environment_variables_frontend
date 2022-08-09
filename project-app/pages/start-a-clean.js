//THIS PAGE IS ACCESS PROTECTED BY AUTH0

//Importing packages
import { useState } from "react";
import dynamic from "next/dynamic";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//Importing Context
import { MapContext } from "../context/MapContext";

//Importing custome components
import StartCleanForm from "../components/Forms/StartClean";
import NavbarStartClean from "../components/Navbar/NavbarStartClean";
import Footer from "../components/Footer/Footer";

const MapWithNoSSR = dynamic(
  () => import("../components/Map/StartCleanMap.jsx"),
  {
    ssr: false,
  }
);

export default function startClean() {
  const [coords, setCoords] = useState([
    51.51035091584348, -0.11112390032246118,
  ]);

  return (
    <MapContext.Provider value={{ setCoords, coords }}>
      <div className="h-full bg-[#E6E5E4]">
        <NavbarStartClean />
        <h2 className="pt-32 pb-8 text-5xl text-center text-[#004F54]">Start a clean</h2>
        <h3 className="ml-8 mb-0 text-lg text-[#004F54]">
          Drag the marker to set your clean-up location
        </h3>

        <div className="flex flex-col sm:flex-row ">
          <div className="w-full m:w-2/5 pt-4 mb-2">
            <MapWithNoSSR />
          </div>

          <div className="flex justify-center w-full mb-14 pt-4">
            <StartCleanForm coords={coords} />
          </div>
        </div>

      <Footer />
      </div>
    </MapContext.Provider>
  );
}

export const getServerSideProps = withPageAuthRequired();
