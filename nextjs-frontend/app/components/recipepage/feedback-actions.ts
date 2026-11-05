"use server";

import { revalidatePath } from "next/cache";

import { saveFeedback } from "@/app/components/queries-neu.ts";

export type FeedbackFormState =
  | { result?: never; errors?: never }
  | { result: "success"; errors?: never }
  | { result: "error"; errors: Record<string, string> };

export type FeedbackFormAction = (
  prevState: FeedbackFormState,
  formData: FormData,
) => Promise<FeedbackFormState>;

export const feedbackFormAction: FeedbackFormAction = async (
  prevState,
  formData,
) => {
  console.log("feedbackFormAction :: prevState", prevState, formData);

  const recipeId = String(formData.get("recipeId"));

  // 🕵️‍♂️ Erzählen: keine eigene Prüfung, die Regeln stehen im Java-Record NewFeedback
  const saved = await saveFeedback(recipeId, {
    commenter: String(formData.get("commenter")),
    stars: Number(formData.get("stars")),
    comment: String(formData.get("comment")),
  });

  if ("errors" in saved) {
    // 🕵️‍♂️ Zeigen: Name mit zwei Buchstaben absenden, die Meldung kommt aus der Bean Validation
    return { result: "error", errors: saved.errors };
  }

  revalidatePath(`/recipes/${recipeId}`);

  return { result: "success" };
};
