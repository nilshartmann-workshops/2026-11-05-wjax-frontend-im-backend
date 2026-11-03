import { OrderButton } from "@/app/components/recipelistpage/OrderButton.tsx";

import ButtonBar from "../ButtonBar.tsx";
import { NavButtonBar } from "../NavButtonBar.tsx";

type RecipeListNavBarProps = {
  currentSearchParams: Promise<Record<string, string>>;
};

export default async function RecipeListNavBar({
  currentSearchParams,
}: RecipeListNavBarProps) {
  const searchParams = await currentSearchParams;

  return (
    <NavButtonBar align={"right"}>
      <ButtonBar>
        <OrderButton currentSearchParams={searchParams} orderBy={undefined}>
          Newest first
        </OrderButton>
        <OrderButton currentSearchParams={searchParams} orderBy={"likes"}>
          Most liked
        </OrderButton>
        <OrderButton currentSearchParams={searchParams} orderBy={"time"}>
          Shortest time
        </OrderButton>
      </ButtonBar>
    </NavButtonBar>
  );
}
