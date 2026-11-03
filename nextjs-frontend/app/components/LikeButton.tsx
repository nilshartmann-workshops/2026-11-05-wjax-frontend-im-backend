import { twMerge } from "tailwind-merge";

import LikeIcon from "@/app/components/LikeIcon.tsx";
import { LikeLoadingIndicator } from "@/app/components/LoadingIndicator.tsx";

type LikeButtonProps = {
  likes: number;
};

export default function LikeButton({ likes }: LikeButtonProps) {
  const { pending } = { pending: false };
  return (
    <button
      type={"submit"}
      disabled={pending}
      className={twMerge(
        "border-orange_2 text-orange_2 hover:bg-orange_2 me-2 flex space-x-2 rounded-sm border bg-white p-2 text-[15px] hover:cursor-pointer hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
      )}
    >
      <span>{likes}</span>
      {pending ? <LikeLoadingIndicator /> : <LikeIcon />}
    </button>
  );
}
