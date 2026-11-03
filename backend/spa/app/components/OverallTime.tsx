import { formatMinuteDuration } from "@/app/components/FormatMinuteDuration.tsx";

type OverallTimeProps = {
  cookTime: number;
  preparationTime: number;
};
export default function OverallTime({
  cookTime,
  preparationTime,
}: OverallTimeProps) {
  const userPreparationTime = preparationTime;
  return (
    <p className="border-green text-green me-2 inline-block rounded-sm border bg-white p-2 text-[15px]">
      <i className="fa-regular fa-clock mr-2"></i>
      {formatMinuteDuration(cookTime + userPreparationTime)}
    </p>
  );
}
