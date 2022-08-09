//THIS PAGE IS ACCESS PROTECTED BY AUTH0

//Importing packages
import {withPageAuthRequired } from '@auth0/nextjs-auth0';

//Importing custome components
import LogCleanForm from "../components/Forms/LogClean";
import NavbarLogClean from "../components/Navbar/NavbarLogClean";
import Footer from "../components/Footer/Footer";

export default function LogClean() {
  return (
    <div className="h-full bg-[#E6E5E4]">
      <NavbarLogClean />
      <h3 className="pt-32 pb-8 text-5xl text-center text-[#004F54]">Log A Clean</h3>
      <div className="flex flex-col">
        <div className="flex justify-center mb-14 pt-4">
          <LogCleanForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(); 