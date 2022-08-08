import StatCard from "./StatCard";
import {useState, useEffect} from 'react'

export default function Stats() {
const [stats, setStats] = useState('')
//Fetch request for stats info
const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

useEffect(() => {
  async function fetchStats() {
    const response = await fetch(`${url}/logclean`);
    const data = await response.json();
    console.log("log clean data", data);
    setStats(data)
    console.log("this is the stats:", stats)
  }
  fetchStats();
}, []);

  return (
    <div className="p-11 bg-[#F1F3F3] w-screen shadow-lg	">
      <div className="flex justify-around items-center space-x-5">
        <StatCard
          number={"10"}
          text="Cleanups Started"
          image="/icon-abacus.svg"
        />
        <StatCard
          number={"10"}
          text="Kilograms Collected"
          image="/icon-weight.svg"
        />
        <StatCard
          number={"10"}
          text="No. of Volunteers"
          image="/icon-people.svg"
        />
      </div>
    </div>
  );
}
