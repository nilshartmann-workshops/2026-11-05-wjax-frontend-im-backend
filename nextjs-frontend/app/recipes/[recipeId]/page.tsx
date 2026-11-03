import { notFound } from "next/navigation";

import { fetchRecipe } from "@/app/components/queries-neu.ts";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";

type RecipePageProps = {
  params: Promise<{ recipeId: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { recipeId } = await params;

  // 🕵️‍♂️ Zeigen: Spring-Log, Aufrufer ist jetzt (node) statt des Browsers
  const recipe = await fetchRecipe(recipeId);

  if (!recipe) {
    return notFound();
  }

  // 🕵️‍♂️ Zeigen: Quelltext der Seite, das Rezept steht im HTML
  return <RecipeDetails recipe={recipe.recipe} />;
}
