import { notFound } from "next/navigation";
import { Suspense } from "react";

import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import {
  fetchExploreRecipes,
  fetchRecipe,
} from "@/app/components/queries-neu.ts";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";

type RecipePageProps = {
  params: Promise<{ recipeId: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { recipeId } = await params;

  // 🕵️‍♂️ Zeigen: die Seite wartet auf Explore, bevor sie das Rezept überhaupt lädt
  // 🕵️‍♂️ Zeigen: ohne await, das Rezept kommt sofort, Explore wird nachgestreamt
  const exploreRecipesPromise = fetchExploreRecipes(recipeId);

  // 🕵️‍♂️ Zeigen: Spring-Log, Aufrufer ist jetzt (node) statt des Browsers
  const recipe = await fetchRecipe(recipeId);

  if (!recipe) {
    return notFound();
  }

  // 🕵️‍♂️ Zeigen: Quelltext der Seite, das Rezept steht im HTML
  return (
    <RecipeDetails recipe={recipe.recipe}>
      <Suspense fallback={<LoadingIndicator />}>
        <ExploreRecipeSlider exploreRecipesPromise={exploreRecipesPromise} />
      </Suspense>
    </RecipeDetails>
  );
}
