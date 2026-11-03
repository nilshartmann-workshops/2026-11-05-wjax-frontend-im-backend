import { RecipeDto } from "@/app/_generated";
import OverallTime from "@/app/components/OverallTime.tsx";

type RecipeCategoriesProps = {
  recipe: RecipeDto;
  hideTime?: boolean;
};

export function RecipeCategories({ recipe, hideTime }: RecipeCategoriesProps) {
  return (
    <div className={"space-y-2"}>
      {hideTime || (
        <OverallTime
          preparationTime={recipe.preparationTime}
          cookTime={recipe.cookTime}
        />
      )}
      {recipe.categories.map((c) => (
        <p
          key={c.id}
          className={
            "border-green text-green me-2 inline-block rounded-sm border bg-white p-2 text-[15px]"
          }
        >
          <i className={c.icon} />
          <span className={"ms-2"}>{c.title}</span>
        </p>
      ))}
    </div>
  );
}
