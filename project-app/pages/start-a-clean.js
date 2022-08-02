import StartCleanForm from "../components/Forms/StartClean";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";
import { useContext, createContext, useState } from "react";
import { MapContext } from "../context/MapContext"

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
        <Navbar />
        <div className=" h-[30rem]"></div>

        <MapWithNoSSR />

        <StartCleanForm coords={coords} />
        <Footer />
      </div>
    </MapContext.Provider>
  );
}
