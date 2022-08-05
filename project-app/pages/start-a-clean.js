//THIS PAGE IS ACCESS PROTECTED BY AUTH0

//Importing packages
import { useState } from "react";
import dynamic from "next/dynamic";
import {withPageAuthRequired } from '@auth0/nextjs-auth0';

//Importing Context
import { MapContext } from "../context/MapContext"

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
        <div className="h-[auto] w-[75%] pl-[25%]">
        <MapWithNoSSR />
        </div>
        <StartCleanForm coords={coords} />
        <Footer />
      </div>
    </MapContext.Provider>
  );
}

export const getServerSideProps = withPageAuthRequired(); 