import Image from "next/image";

export default function StatCard({ image, number, text }) {
  return (
    <div className="flex flex-col text-center w-48 h-48 shadow-lg bg-[#F1F3F3]">
      <div className="p-2 text-[#FF9505] text-lg font-bold">
        <Image src={image} width={75} height={75}/>
        <p className="text-2xl m-0">{number}</p> {/* number prop goes here */}
        <p>{text}</p> {/* text prop goes here */}
      </div>
    </div>
  );
}
