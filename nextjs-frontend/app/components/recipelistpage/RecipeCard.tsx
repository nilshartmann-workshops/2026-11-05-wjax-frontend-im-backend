import Link from "next/link";

import { RecipeDto } from "@/app/_generated";
import { RecipeCategories } from "@/app/components/RecipeCategories.tsx";

import { H1 } from "../Heading.tsx";

type RecipeCardProps = {
  recipe: RecipeDto;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div
      className={
        "h-full transform rounded-sm border border-gray-200 bg-white p-4 shadow-lg transition-all duration-500 ease-in-out hover:drop-shadow-2xl"
      }
    >
      <div className={"flex flex-col justify-between"}>
        <div>
          <Link prefetch={false} href={`/recipes/${recipe.id}`}>
            <div className={"overflow-hidden"}>
              <img
                className="mb-2 h-48 max-h-full w-full max-w-full transform rounded-sm object-cover transition-all duration-500 ease-in-out hover:scale-110"
                src={recipe.image.src}
                alt={recipe.image.title}
              />
            </div>
          </Link>
          <H1 className={"font-space mt-4 mb-4 font-bold"}>
            <Link
              prefetch={false}
              href={`/recipes/${recipe.id}`}
              className={"hover:text-orange_2 hover:underline"}
            >
              {recipe.title}
            </Link>
          </H1>
          <div className={"text font-inter mt-2 text-gray-500"}>
            {recipe.headline}
          </div>
        </div>
        <div className={"mt-4 space-y-2"}>
          <RecipeCategories recipe={recipe} />
        </div>
      </div>
    </div>
  );
}

export { RecipeCard };
