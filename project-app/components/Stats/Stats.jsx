import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="p-11">
      <div className="flex justify-around items-center space-x-5">
        <StatCard number="10" text="Cleanups Started" image="/icon-abacus.svg"/>
        <StatCard number="10" text="Kilograms Collected" image="/icon-weight.svg"/>
        <StatCard number="10" text="No. of Volunteers" image="/icon-people.svg"/>
      </div>
    </div>
  );
}
