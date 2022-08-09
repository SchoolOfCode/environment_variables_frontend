import StatCard from "./StatCard";
import { useState, useEffect } from "react";

export default function Stats() {
  const [volunteers, setVolunteers] = useState("");
  const [bags, setBags] = useState("");
  const [totalCleans, setTotalCleans] = useState("");
  //Fetch request for stats info
  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  useEffect(() => {
    async function fetchVolunteers() {
      const response = await fetch(`${url}/logclean/volunteers`);
      const data = await response.json();
      setVolunteers(data.payload[0].sum);
    }
    async function fetchBags() {
      const response = await fetch(`${url}/logclean/bagscollected`);
      const data = await response.json();
      setBags(data.payload[0].sum);
    }
    async function fetchCleans() {
      const response = await fetch(`${url}/startclean/totalcleans`);
      const data = await response.json();
      setTotalCleans(data.payload[0].count);
    }
    fetchVolunteers();
    fetchBags();
    fetchCleans();
  }, []);
  console.log("Total Volunteers data:", volunteers);
  console.log("Total bags data:", bags);
  console.log("Total Cleans data:", totalCleans);

  return (
    <div className="p-11 bg-[#F1F3F3] w-screen shadow-lg	">
      <div>
        <h2 className="flex sm:justify-center mr-2 sm:mr-0 ml-1 sm:ml-0 text-lg sm:text-xl md:text-2xl pb-10 font-semibold sm:font-medium text-[#004f54]">
          Together we are making an incredible difference......
        </h2>
      </div>
      <div className="flex justify-around items-center space-x-5">
        <StatCard
          key={Math.random() * 500}
          number={totalCleans}
          text="Cleanups Started"
          image="/icon-abacus.svg"
        />
        <StatCard
          key={Math.random() * 500}
          number={bags * 5}
          text="Kilograms Collected"
          image="/icon-weight.svg"
        />
        <StatCard
          key={Math.random() * 500}
          number={volunteers}
          text="No. of Volunteers"
          image="/icon-people.svg"
        />
      </div>
    </div>
  );
}
