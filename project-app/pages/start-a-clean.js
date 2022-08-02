import StartCleanForm from "../components/Forms/StartClean";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(
  () => import("../components/Map/StartCleanMap.jsx"),
  {
    ssr: false,
  }
);

export default function startClean() {
  return (
    <div className="h-full">
      <Navbar />
      <div className=" h-[30rem]"></div>

      <MapWithNoSSR />

      <StartCleanForm />
      <Footer />
    </div>
  );
}
