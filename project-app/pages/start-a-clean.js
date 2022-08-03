//Importing packages
import React from 'react';
import { useContext, createContext, useState } from "react";
import { MapContext } from "../context/MapContext"
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

//Importing components
import StartCleanForm from "../components/Forms/StartClean";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";

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

  //Auth0 code
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if(user){
  
       return (  
        <>
         <h1 className='text-xl'>Wellcome {user.name}</h1>
          <MapContext.Provider value={{ setCoords, coords }}>
            <div className="h-full">
              <Navbar />
              <div className="h-[auto] w-[75%] pl-[25%]">
              <MapWithNoSSR />
              </div>
              <StartCleanForm coords={coords} />
              <Link href="/api/auth/logout">
                   <a className="text-[black] md:flex pl-[45%] items-center text-xl">Logout</a>
              </Link>
              <Footer />
            </div>
         
          </MapContext.Provider>
          </>
       )
  }
     return <Link href="/api/auth/login">
              <a className="text-[black] md:flex pl-[45%] items-center text-xl">Login</a>
            </Link>
}



//end 

  //Page rendered once user has logged in
//   return (  
//     <MapContext.Provider value={{ setCoords, coords }}>
//       <div className="h-full">
//         <Navbar />
//         <div className="h-[auto] w-[75%] pl-[25%]">
//         <MapWithNoSSR />
//         </div>
//         <StartCleanForm coords={coords} />
//         <Footer />
//       </div>
//     </MapContext.Provider>
//   );
// }

export const getServerSideProps = withPageAuthRequired();
