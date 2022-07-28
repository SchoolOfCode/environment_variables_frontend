import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";

import dynamic from "next/dynamic";

// const MapWithNoSSR = dynamic(() => import("../components/Map/Map.jsx"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className="text-blue-600/100 hover:underline">Project Clean-Up</h1>

      {/* <MapWithNoSSR /> */}
    </div>
  );
}
