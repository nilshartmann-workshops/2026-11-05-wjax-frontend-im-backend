import { Ingredient } from "@/app/_generated";
import IconButton from "@/app/components/recipepage/IconButton.tsx";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";
import { logRender } from "@/app/components/log-render.ts";

type IngredientsProps = {
  ingredients: Ingredient[];
};
export default function IngredientsSection({ ingredients }: IngredientsProps) {
  logRender("IngredientsSection", ingredients);
  const [servings] = [4];
  return (
    <>
      <div className={"mt-8 mb-8 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Ingredients</h2>
        <div
          className={
            "rounded-lg border border-dotted border-gray-500 p-4 text-lg"
          }
        >
          <IconButton icon={"plus"} />
          <span className={"text-gray-500"}> {servings} servings </span>
          <IconButton icon={"minus"} disabled={servings === 1} />
        </div>
      </div>
      <IngredientList ingredients={ingredients} servings={servings} />
    </>
  );
}
