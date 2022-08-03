//Import Next components
import Link from 'next/link'
import Head from "next/head";

//Import custom components
import NavbarLogClean from "../components/Navbar/NavbarLogClean";
import Footer from "../components/Footer/Footer";
import NavButton from "../components/Landing/NavButton/NavButton.jsx"

export default function FourOhFour() {
  return (
    <div className="bg-[#E6E5E4]">
      <Head>
        <title>Project Clean-Up | 404</title>
      </Head>

    <div className="bg-hero-background min-h-screen bg-center bg-cover flex top-0">
    
      <div className="relative container mx-auto mt-40 h-48 w-2/4 p-4 flex items-center justify-center ">
        <div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-[40px] sm:text-[75px] text-[#004F54] flex justify-center font-semibold leading-none align-center mt-80">
              404
            </h2>
            <h3 className="text-[24px] sm:text-[28px] text-[#004F54] flex justify-center font-semibold leading-none align-center">Page Not Found</h3>
    
            <Link href="/">
                <a className="mt-20">
                  <NavButton
                    buttonText="Home"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>  
        </div>


    </div>
  </div>
</div>
</div>

  )
}