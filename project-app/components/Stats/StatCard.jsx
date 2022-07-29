import Image from "next/image";

export default function StatCard({ image, number, text }) {
  return (
    <div className="border-[0.1rem] b-[black] flex flex-col text-center w-48 h-48 pt-6">
      <div className="p-4 border-[0.1rem] b-[blue]">
        <Image src={image}>
        {/* change p to a next Image tag and pass down url as image prop */}
        <p>{number}</p> {/* number prop goes here */}
        <p>{text}</p> {/* text prop goes here */}
      </div>
    </div>
  );
}
