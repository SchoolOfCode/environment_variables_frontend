import LogCleanForm from "../components/Forms/LogClean";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function LogClean() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-[70%] p-[4rem]">
      <LogCleanForm />
      </div>
     
      <Footer />
    </div>
  );
}
