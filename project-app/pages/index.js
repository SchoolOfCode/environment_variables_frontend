import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import LandingBanner from "../components/Landing/Landing";
import Weather from "../components/Weather/Weather";
import Stats from "../components/Stats/Stats";

const MapWithNoSSR = dynamic(() => import("../components/Map/Map.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Clean-Up|Home</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <LandingBanner />
        <Stats />
        <MapWithNoSSR />
        <Weather />
      </div>
    </>
  );
}
