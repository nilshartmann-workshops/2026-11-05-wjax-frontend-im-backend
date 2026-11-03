"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchRecipes } from "@/app/api.ts";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import RecipeList from "@/app/components/recipelistpage/RecipeList.tsx";

export default function RecipeListPage() {
  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <div className={"RecipeListPage"}>
      <RecipeList recipes={data} />
    </div>
  );
}
