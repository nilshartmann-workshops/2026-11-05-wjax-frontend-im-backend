import { Ingredient } from "@/app/_generated";

type IngredientListProps = {
  ingredients: Ingredient[];
  servings?: number;
  recipeId?: string;
};
export default function IngredientList({
  ingredients,
  servings = 4,
}: IngredientListProps) {
  return (
    <>
      {ingredients.map((i) => {
        return (
          <div
            className={
              "ms-4 me-4 mb-4 border-b border-dotted border-gray-300 pb-4"
            }
            key={i.name}
          >
            <i className="fa-regular fa-circle-check text-orange_2 me-2"></i>
            <span className={"font-inter text-gray-500"}>
              {(i.amount / 4) * servings} {i.unit} {i.name}
            </span>
          </div>
        );
      })}
    </>
  );
}
