"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const AVERAGE_SKILL = 3;

type SkillContext = {
  level: number;
  setLevel(newLevel: number): void;
  calculateTime(time: number): number;
};

const SkillContext = createContext<SkillContext>({
  level: AVERAGE_SKILL,
  calculateTime(time: number) {
    return time;
  },
  setLevel(newLevel: number) {},
});

type SkillContextProviderProps = {
  children: ReactNode;
};
export function SkillContextProvider({ children }: SkillContextProviderProps) {
  const [currentLevel, setCurrentLevel] = useState(AVERAGE_SKILL);

  const calculateTime = (time: number) =>
    adjustPreparationTime(time, currentLevel);

  const contextValue: SkillContext = {
    level: currentLevel,
    setLevel: setCurrentLevel,
    calculateTime,
  };

  return <SkillContext value={contextValue}>{children}</SkillContext>;
}

export function useSkillContext() {
  return useContext(SkillContext);
}

function adjustPreparationTime(baseTime: number, skillLevel: number): number {
  const multiplier = AVERAGE_SKILL / skillLevel;

  return Math.round(baseTime * multiplier);
}
