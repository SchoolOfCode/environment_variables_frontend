import JoinCleanForm from "../components/Forms/JoinClean.jsx";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function LogClean() {
  return (
    <div className="h-full">
      <Navbar />
      <div className=" h-[30rem]"></div>
      <JoinCleanForm />
      <Footer />
    </div>
  );
}
