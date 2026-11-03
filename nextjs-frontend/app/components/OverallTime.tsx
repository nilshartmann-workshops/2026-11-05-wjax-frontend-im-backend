import { formatMinuteDuration } from "@/app/components/FormatMinuteDuration.tsx";
import { useSkillContext } from "@/app/components/SkillContext.tsx";

type OverallTimeProps = {
  cookTime: number;
  preparationTime: number;
};
export default function OverallTime({
  cookTime,
  preparationTime,
}: OverallTimeProps) {
  const userPreparationTime = preparationTime;
  // todo calculate time based on context:
  // const userPreparationTime = useSkillContext().calculateTime(preparationTime);
  return (
    <p className="border-green text-green me-2 inline-block rounded-sm border bg-white p-2 text-[15px]">
      <i className="fa-regular fa-clock mr-2"></i>
      {formatMinuteDuration(cookTime + userPreparationTime)}
    </p>
  );
}
