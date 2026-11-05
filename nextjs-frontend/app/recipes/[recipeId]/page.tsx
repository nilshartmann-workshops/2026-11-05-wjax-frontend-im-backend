import { Suspense } from "react";

import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { fetchExploreRecipes } from "@/app/components/queries-neu.ts";
import { RenderedAt } from "@/app/components/RenderedAt.tsx";
import { CacheableRecipeDetails } from "@/app/components/recipepage/CacheableRecipeDetails.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";

type RecipePageProps = {
  params: Promise<{ recipeId: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { recipeId } = await params;

  // 🕵️‍♂️ Zeigen: die Seite wartet auf Explore, bevor sie das Rezept überhaupt lädt
  // 🕵️‍♂️ Zeigen: ohne await, das Rezept kommt sofort, Explore wird nachgestreamt
  const exploreRecipesPromise = fetchExploreRecipes(recipeId);

  // 🕵️‍♂️ Zeigen: Quelltext der Seite, das Rezept steht im HTML
  return (
    <CacheableRecipeDetails recipeId={recipeId}>
      <Suspense fallback={<LoadingIndicator />}>
        <RenderedAt label={"Explore"} />
        <ExploreRecipeSlider exploreRecipesPromise={exploreRecipesPromise} />
      </Suspense>
    </CacheableRecipeDetails>
  );
}
