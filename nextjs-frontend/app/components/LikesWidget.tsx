import { RecipeDto } from "@/app/_generated";
import LikeButton from "@/app/components/LikeButton.tsx";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  function handleSubmit() {
    console.log("todo: IMPLEMENT LIKE FORM SUBMIT", recipe.id);
  }

  return (
    <form className={"inline-block"}>
      <LikeButton likes={recipe.likes} />
    </form>
  );
}
