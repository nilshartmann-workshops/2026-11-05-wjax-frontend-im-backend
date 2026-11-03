import Link from "next/link";

import { ExploreRecipeDto } from "@/app/_generated";
import { H3 } from "@/app/components/Heading.tsx";
import { logRender } from "@/app/components/log-render.ts";
import { formatTime } from "@/app/components/format-date.ts";

type ExploreRecipeBoxProps = {
  recipe: ExploreRecipeDto;
};

export default function ExploreRecipeBox({ recipe }: ExploreRecipeBoxProps) {
  // WO WIRD DIESE KOMPONENTE GERENDERT?
  logRender("ExploreRecipeBox");

  return (
    <div className={"border-teal rounded-lg"}>
      <div className={"transform"}>
        <div className={"relative overflow-hidden"}>
          <img
            className="h-48 max-h-full w-full max-w-full transform rounded-sm object-cover"
            src={recipe.image.src}
            alt={recipe.image.title}
          />

          <div className={"absolute bottom-2 w-full"}>
            <div
              className={
                "mx-2 flex justify-center rounded-lg bg-white/90 p-2 text-center"
              }
            >
              <Link
                href={`/recipes/${recipe.id}`}
                prefetch={false}
                className={"hover:underline"}
              >
                <H3>{recipe.title}</H3>
                {/*<p>{formatTime(recipe.generatedAt)}</p>*/}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
