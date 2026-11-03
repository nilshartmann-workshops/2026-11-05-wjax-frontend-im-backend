import { ReactNode } from "react";

import { DetailedRecipeDto } from "@/app/_generated";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { CookingTime } from "@/app/components/recipepage/CookingTime.tsx";
import { Instructions } from "@/app/components/recipepage/Instructions.tsx";
import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";

type RecipeDetailsProps = {
  recipe: DetailedRecipeDto;
  children?: ReactNode;
};

export default function RecipeDetails({
  recipe,
  children,
}: RecipeDetailsProps) {
  return (
    <>
      <RecipeBanner recipe={recipe} />
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
          cookTime={recipe.cookTime}
          preparationTime={recipe.preparationTime}
        />
        {/*<IngredientsSection ingredients={recipe.ingredients} />*/}
        <Instructions recipe={recipe} />
      </TwoColumnLayout>
    </>
  );
}
