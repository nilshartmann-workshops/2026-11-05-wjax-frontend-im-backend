import "./RecipeBanner.css";

import React from "react";

import { DetailedRecipeDto } from "@/app/_generated";
import { RecipeCategories } from "@/app/components/RecipeCategories.tsx";
import { formatTime } from "@/app/components/format-date.ts";

type RecipeBannerProps = {
  recipe: DetailedRecipeDto;
};

export function RecipeBanner({ recipe }: RecipeBannerProps) {
  return (
    <div
      style={{
        "--recipe-bg-image": `url('${recipe.image.src}')`,
      }}
    >
      <div className={`recipify-header-wrap ps-8 pe-8 pt-12 pb-12`}>
        <div
          className={
            "container mx-auto flex flex-col-reverse md:flex-row md:space-x-8"
          }
        >
          <div className={"mt-8 md:mt-0 md:w-1/2"}>
            <div className={"flex h-full flex-col justify-between"}>
              <div>
                <div className={"flex justify-between"}>
                  <p
                    className={
                      "font-space text-red text-sm font-medium tracking-[2px] uppercase"
                    }
                  >
                    {recipe.mealType}
                  </p>
                </div>
                <h1 className={"font-space mt-4 mb-4 text-5xl font-bold"}>
                  {recipe.title}
                </h1>
                <p className={"text font-inter mt-2 text-gray-500"}>
                  {recipe.headline}
                </p>
              </div>
              <div>
                <div className={"mt-4 flex"}>
                  <RecipeCategories recipe={recipe} hideTime />
                </div>
              </div>
              {/*<div>{formatTime(recipe.generatedAt)}</div>*/}
            </div>
          </div>
          <div className={"md:w-1/2"}>
            <div className={"overflow-hidden"}>
              <img
                className="w-full transform rounded-sm object-cover transition-all duration-1000 ease-in-out hover:scale-125 sm:mt-4 sm:max-h-80 md:mt-0"
                src={recipe.image.src}
                alt={recipe.image.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
