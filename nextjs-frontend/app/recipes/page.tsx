import { Suspense } from "react";

import RecipeList from "@/app/components/recipelistpage/RecipeList.tsx";
import { fetchRecipes } from "@/app/components/queries-neu.ts";
import { logRender } from "@/app/components/log-render.ts";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

export default function RecipeListPage() {
  return (
    <div className={"RecipeListPage"}>
      <Suspense fallback={<LoadingIndicator />}>
        <RecipeListContent />
      </Suspense>
    </div>
  );
}

async function RecipeListContent() {
  logRender("RecipeListPage");

  const recipes = await fetchRecipes();
  return <RecipeList recipes={recipes} />;
}
