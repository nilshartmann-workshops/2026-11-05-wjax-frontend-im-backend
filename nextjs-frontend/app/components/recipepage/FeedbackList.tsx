import { GetRecipeFeedbacksResponse } from "@/app/_generated";

import { formatDate } from "../format-date.ts";
import { RatingStars } from "../RatingStars.tsx";

type FeedbackListProps = {
  feedbackPromise: Promise<GetRecipeFeedbacksResponse>;
};
export default async function FeedbackList({
  feedbackPromise,
}: FeedbackListProps) {
  const feedback = await feedbackPromise;
  return (
    <>
      {feedback.feedbacks.map((f) => {
        return (
          <div
            key={f.id}
            className={
              "mb-8 rounded-2xl border border-dotted border-gray-300 bg-white ps-4 pe-4 pt-4 pb-8"
            }
          >
            <span className={"font-inter text-gray-500"}>
              <div className={"flex items-end justify-between"}>
                <div className={"font-medium"}>{f.commenter} </div>
                <div className={"text-sm"}>{formatDate(f.createdAt)}</div>
              </div>
              <div className={"text-orange_2 mt-1"}>
                <RatingStars rating={f.rating} />
              </div>
              <div className={"mt-4"}>{f.comment}</div>
            </span>
          </div>
        );
      })}
    </>
  );
}
