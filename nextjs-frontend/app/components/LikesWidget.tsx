import { revalidatePath } from "next/cache";

import { RecipeDto } from "@/app/_generated";
import LikeButton from "@/app/components/LikeButton.tsx";
import { saveLike } from "@/app/components/queries-neu.ts";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  // 🕵️‍♂️ Erzählen: kein Controller, kein Endpunkt, kein fetch im Browser
  async function handleSubmit() {
    "use server";
    await saveLike(recipe.id);

    revalidatePath("/recipes");
    revalidatePath(`/recipes/${recipe.id}`);
  }

  // 🕵️‍♂️ Zeigen: JavaScript im Browser abschalten, Like klicken, der Zähler steigt trotzdem
  return (
    <form className={"inline-block"} action={handleSubmit}>
      <LikeButton likes={recipe.likes} />
    </form>
  );
}
