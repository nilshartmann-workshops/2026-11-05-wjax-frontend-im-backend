import { ReactNode } from "react";

import { notFound } from "next/navigation";

import { fetchRecipe } from "@/app/components/queries-neu.ts";
import { RenderedAt } from "@/app/components/RenderedAt.tsx";
import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";
import { AddFeedbackForm } from "@/app/components/recipepage/FeedbackForm.tsx";
import { CookingTime } from "@/app/components/recipepage/CookingTime.tsx";
import { Instructions } from "@/app/components/recipepage/Instructions.tsx";

// 🔎 Zeigen:
//   Lädt das Rezept selbst (recipeId) und rendert RecipeDetails.
//   children werden nur durchgereicht (pass-through).

type CacheableRecipeDetailsProps = {
  recipeId: string;
  children?: ReactNode;
};

export async function CacheableRecipeDetails({
  recipeId,
  children,
}: CacheableRecipeDetailsProps) {
  // 🕵️‍♂️ Zeigen: zweimal laden, die Uhrzeit am Rezept bleibt stehen, die an Explore springt
  "use cache";

  const recipe = await fetchRecipe(recipeId);

  if (!recipe) {
    return notFound();
  }
  return (
    <>
      <RenderedAt label={"Rezept gerendert um"} />
      <RecipeBanner recipe={recipe.recipe} />
      <TwoColumnLayout
        sidebar={
          children && (
            <Sidebar>
              <SidebarBox title={"Explore"}>{children}</SidebarBox>
            </Sidebar>
          )
        }
      >
        <CookingTime
          cookTime={recipe.recipe.cookTime}
          preparationTime={recipe.recipe.preparationTime}
        />
        {/*<IngredientsSection ingredients={recipe.ingredients} />*/}
        <Instructions recipe={recipe.recipe} />
        <div className={"mt-8"}>
          <AddFeedbackForm recipeId={String(recipe.recipe.id)} />
        </div>
      </TwoColumnLayout>
    </>
  );
}
