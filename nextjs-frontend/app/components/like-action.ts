"use server";

import { revalidatePath } from "next/cache";

import { saveLike } from "@/app/components/queries-neu.ts";

type LikeActionState = {
  recipeId: string;
  likes: number;
};

export async function likeRecipeAction({
  recipeId,
}: LikeActionState): Promise<LikeActionState> {
  const response = await saveLike(recipeId);
  revalidatePath("/recipes");

  return {
    recipeId,
    likes: response.newLikes,
  };
}
