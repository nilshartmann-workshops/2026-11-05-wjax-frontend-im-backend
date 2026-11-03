"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { fetchRecipe } from "@/app/api.ts";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";

// Die ID steht im Query-Parameter (/recipes/detail?recipeId=12), weil der
// statische Export für einen Pfad wie /recipes/12 jede ID schon beim Build
// kennen müsste.

export default function RecipePage() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <RecipePageContent />
    </Suspense>
  );
}

function RecipePageContent() {
  const recipeId = useSearchParams().get("recipeId") ?? "";
  const { data } = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => fetchRecipe(recipeId),
  });

  if (!data) {
    return <LoadingIndicator />;
  }

  return <RecipeDetails recipe={data.recipe} />;
}
