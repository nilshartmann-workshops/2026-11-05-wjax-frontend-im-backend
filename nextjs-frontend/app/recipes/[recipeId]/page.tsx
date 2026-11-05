import { Metadata } from "next";
import { Suspense } from "react";

import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import {
  fetchExploreRecipes,
  fetchRecipe,
} from "@/app/components/queries-neu.ts";
import { RenderedAt } from "@/app/components/RenderedAt.tsx";
import { CacheableRecipeDetails } from "@/app/components/recipepage/CacheableRecipeDetails.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";

type RecipePageProps = {
  params: Promise<{ recipeId: string }>;
};

// 🕵️‍♂️ Zeigen: Quelltext der Seite, Titel und Beschreibung stehen im <head>
export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { recipeId } = await params;
  const recipe = await fetchRecipe(recipeId);

  if (!recipe) {
    return { title: "Rezept nicht gefunden" };
  }

  return {
    title: recipe.recipe.title,
    description: recipe.recipe.headline,
  };
}

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
