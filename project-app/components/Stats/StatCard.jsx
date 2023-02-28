import Image from "next/image";

export default function StatCard({ image, number, text }) {
  return (
    <div className="flex flex-col rounded-2xl text-center w-52 h-48 shadow-lg bg-white">
      <div className="p-2 text-[#FF9505]">
        <Image src={image} width={75} height={75} />
        <p className="text-2xl sm:text-3xl font-bold m-0 mt-1">{number}</p>{" "}
        {/* number prop goes here */}
        <p className="text-lg mt-1 font-medium">{text}</p>{" "}
        {/* text prop goes here */}
      </div>
    </div>
  );
}
