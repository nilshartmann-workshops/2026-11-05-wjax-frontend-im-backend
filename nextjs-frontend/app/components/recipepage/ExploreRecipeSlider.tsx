"use client";

import { useState } from "react";

import { ExploreRecipeDto } from "@/app/_generated";
import { ArrowButton } from "@/app/components/Button.tsx";
import ExploreRecipeBox from "@/app/components/recipepage/ExploreRecipeBox.tsx";

type ExploreRecipesProps = {
  exploreRecipes: ExploreRecipeDto[];
};

export default function ExploreRecipeSlider({
  exploreRecipes,
}: ExploreRecipesProps) {
  const recipes = exploreRecipes;
  const [selected, setSelected] = useState(0);

  const recipe = recipes[selected];

  const handleClick = (amount: number) => {
    const newSelected = selected + amount;
    setSelected(
      newSelected < 0
        ? recipes.length - 1
        : newSelected > recipes.length - 1
          ? 0
          : newSelected,
    );
  };

  return (
    <div className={"relative transform"}>
      <button
        className={"absolute top-2 left-2 z-10"}
        onClick={() => handleClick(-1)}
      >
        <ArrowButton direction={"left"} />
      </button>
      <ExploreRecipeBox recipe={recipe} />
      <button
        onClick={() => handleClick(+1)}
        className={"absolute top-2 right-2"}
      >
        <ArrowButton direction={"right"} />
      </button>
    </div>
  );
}
