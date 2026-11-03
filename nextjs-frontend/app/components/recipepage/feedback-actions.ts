"use server";

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

  // todo: Formulardaten mit saveFeedback an das Backend schicken

  return {};
};
