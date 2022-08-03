import LogCleanForm from "../components/Forms/LogClean";
import NavbarLogClean from "../components/Navbar/NavbarLogClean";
import Footer from "../components/Footer/Footer";

export default function LogClean() {
  return (
    <div className="h-full">
      <NavbarLogClean />
      <div className="h-[70%] p-[4rem]">
        <LogCleanForm />
      </div>

      <Footer />
    </div>
  );
}
