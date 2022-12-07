//THIS PAGE IS ACCESS PROTECTED BY AUTH0

//Importing packages
import Head from "next/head";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//Importing custome components
import LogCleanForm from "../components/Forms/LogClean";
import NavbarLogClean from "../components/Navbar/NavbarLogClean";
import Footer from "../components/Footer/Footer";

export default function LogClean() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Project Clean-Up | Log a Clean</title>
      </Head>
      <NavbarLogClean />

      <h3 className="pt-32  text-5xl text-center text-[#004F54]">
        Log a Clean
      </h3>
      <div className="flex flex-col h-full justify-center">
        <div className="flex justify-center  ">
          <h3 className="  mb-0 text-sm sm:text-lg rounded-md text-[#ffffff] bg-[#FF9505] w-11/12 sm:w-[34rem] p-1 text-center">
            Log your clean, then our stats will update with your contribution!
          </h3>
        </div>

        <div className="flex justify-center mb-14 pt-4">
          <LogCleanForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

// added comment to force push
