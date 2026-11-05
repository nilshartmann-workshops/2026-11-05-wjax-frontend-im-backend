import { notFound } from "next/navigation";

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
  const exploreRecipes = await fetchExploreRecipes(recipeId);

  // 🕵️‍♂️ Zeigen: Spring-Log, Aufrufer ist jetzt (node) statt des Browsers
  const recipe = await fetchRecipe(recipeId);

  if (!recipe) {
    return notFound();
  }

  // 🕵️‍♂️ Zeigen: Quelltext der Seite, das Rezept steht im HTML
  return (
    <RecipeDetails recipe={recipe.recipe}>
      <ExploreRecipeSlider exploreRecipes={exploreRecipes} />
    </RecipeDetails>
  );
}
