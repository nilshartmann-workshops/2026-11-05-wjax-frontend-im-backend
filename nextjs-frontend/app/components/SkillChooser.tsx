"use client";

import { ArrowButton } from "@/app/components/Button.tsx";
import { useSkillContext } from "@/app/components/SkillContext.tsx";

const skills: Record<number, string> = {
  1: "Microwave Master",
  2: "Pan Rookie",
  3: "Everyday Cook",
  4: "Kitchen Ninja",
  5: "Culinary Wizard",
};

export default function SkillChooser() {
  const skillContext = useSkillContext();

  const handleClick = (amount: number) => {
    let newLevel = skillContext.level + amount;
    if (newLevel > 5) {
      newLevel = 1;
    } else if (newLevel < 1) {
      newLevel = 5;
    }
    skillContext.setLevel(newLevel);
  };

  return (
    <div
      className={
        "bg-goldgray/70 hover:bg-goldgray/80 flex max-w-104 min-w-104 rounded-lg px-4 py-2"
      }
    >
      <div className={"flex w-full items-center justify-between gap-x-2"}>
        <p className={"w-40"}>Set your cooking skill</p>
        <div className={"flex flex-1 items-center justify-between"}>
          <button onClick={() => handleClick(-1)}>
            <ArrowButton direction={"left"} />
          </button>
          {skills[skillContext.level]}
          <button onClick={() => handleClick(+1)}>
            <ArrowButton direction={"right"} />
          </button>
        </div>
      </div>
    </div>
  );
}
