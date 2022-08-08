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
      <div className="h-full">
        <NavbarStartClean />
        <h3 className="pt-32 ml-4 text-3xl text-[#004F54]">Start a clean...</h3>
        <h4 className="ml-4 text-md text-[#004F54]">
          stap 1: drag the map marker to cleanup location
        </h4>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 pt-12 mb-2">
            <MapWithNoSSR />
          </div>
          <div className="w-full sm:w-1/3 mb-6">
            <StartCleanForm coords={coords} />
          </div>
        </div>
        <Footer />
      </div>
    </MapContext.Provider>
  );
}

export const getServerSideProps = withPageAuthRequired();
