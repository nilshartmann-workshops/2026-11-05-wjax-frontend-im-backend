"use client";
import { useActionState, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  feedbackFormAction,
  FeedbackFormState,
} from "@/app/components/recipepage/feedback-actions.ts";
import RatingInput from "@/app/components/recipepage/RatingInput.tsx";

import { Button } from "../Button.tsx";
import ButtonBar from "../ButtonBar.tsx";
import { Input, Textarea } from "../Input";

type AddFeedbackFormProps = {
  recipeId: string;
};

export function AddFeedbackForm({ recipeId }: AddFeedbackFormProps) {
  // useFormState will be replaced by useActionState
  //   useActionState also has a isPending information
  const [currentState, formAction, isPending] = useActionState(
    feedbackFormAction,
    {},
  );
  console.log("pending", isPending);

  return (
    <FeedbackForm
      recipeId={recipeId}
      formAction={formAction}
      formState={currentState}
      pending={isPending}
    />
  );
}

type FeedbackFormProps = {
  recipeId: string;
  formAction: (fd: FormData) => void;
  formState: FeedbackFormState;
  pending?: boolean;
};

function FeedbackForm({
  recipeId,
  formAction,
  formState,
  pending = false,
}: FeedbackFormProps) {
  const [stars, setStars] = useState(-1);
  const [commentLength, setCommentLength] = useState(0);

  const formDisabled = pending;

  return (
    <form
      action={formAction}
      onReset={() => {
        // Nach der Action leert React die Felder, den State hier aber nicht
        setStars(-1);
        setCommentLength(0);
      }}
    >
      {/* <!-- Welcome back, ol' hidden friend --> */}
      <input type={"hidden"} name="recipeId" value={recipeId} />
      <h2 className={"font-space mb-4 text-3xl font-bold"}>Your opinion?</h2>
      <div
        className={
          "font-inter mb-8 rounded-2xl border border-dotted border-gray-300 bg-white p-8 text-gray-500 hover:border-solid"
        }
      >
        <div className={"mb-4 font-medium"}>Your name:</div>

        <div className={"mb-8"}>
          <Input
            disabled={formDisabled}
            name={"commenter"}
            className={
              "hover:outline-orange_2 focus:outline-orange_2 rounded-lg border-gray-300 pt-6 pb-6 hover:outline-solid focus:outline-solid"
            }
          />
        </div>

        <div className={"mb-4 font-medium"}>Your rating:</div>

        <div className={"mb-8"}>
          <RatingInput
            stars={stars}
            onStarsChange={setStars}
            disabled={formDisabled}
          />
        </div>

        <div className={"mb-4 font-medium"}>Your comment:</div>
        <div className={"mb-2"}>
          <Textarea
            rows={4}
            name={"comment"}
            className={
              "focus:outline-orange_2 rounded-lg border-gray-300 pt-3 pb-6 focus:outline-solid"
            }
            onChange={(e) => setCommentLength(e.target.value.length)}
            disabled={formDisabled}
          />
        </div>
        <div className={"mb-4 flex w-full items-center"}>
          <span
            className={twMerge("text-sm", commentLength > 500 && "text-red")}
          >
            {commentLength}/500 characters
          </span>
        </div>
        <div>
          <ButtonBar align={"end"}>
            <Button disabled={formDisabled}>
              <button type={"submit"} disabled={formDisabled}>
                Submit Rating
              </button>
            </Button>
          </ButtonBar>
        </div>
        {formState.result === "success" && (
          <div>
            <div className={"text-green mt-4 font-medium"}>
              Thanks for your submission!
            </div>
          </div>
        )}
        {formState.result === "error" && (
          <ul className={"text-red mt-4 font-medium"}>
            {Object.entries(formState.errors).map(([field, message]) => (
              <li key={field}>
                {field}: {message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
