import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="p-11 border-[0.1rem] border-[red]">
      <div className="flex justify-around items-center space-x-5 border-[0.1rem] border-[green]">
        <StatCard number="10" text="Cleanups Started" />
        <StatCard number="10" text="Kilograms Collected" />
        <StatCard number="10" text="No. of Volunteers" />
      </div>
    </div>
  );
}
