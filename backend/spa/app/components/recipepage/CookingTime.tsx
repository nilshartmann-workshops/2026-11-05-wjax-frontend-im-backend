import { formatMinuteDuration } from "../FormatMinuteDuration";

type CookingTimeProps = {
  cookTime: number;
  preparationTime: number;
};

export function CookingTime({ cookTime, preparationTime }: CookingTimeProps) {
  const userPreprationTime = preparationTime;

  return (
    <div
      className={"mt-3 w-full border-b border-dotted border-gray-300 pt-4 pb-4"}
    >
      <div className={"mb-4 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Cooking time</h2>
        <div className={"flex w-full justify-between"}>
          <div className={"flex flex-1 items-center"}>
            <i className="fa-regular fa-clock-four text-orange_2 me-4 text-3xl"></i>
            <div className={"font-inter text-gray-500"}>
              <div className={"font-medium"}>Cooking</div>
              <div>{formatMinuteDuration(cookTime)}</div>
            </div>
          </div>
          <div className={"flex flex-1 items-center"}>
            <i className="fa-regular fa-clock-four text-orange_2 me-4 text-3xl"></i>
            <div className={"font-inter text-gray-500"}>
              <div className={"font-medium"}>Preperation</div>
              <div>{formatMinuteDuration(userPreprationTime)}</div>
            </div>
          </div>
          <div className={"flex flex-1 items-center"}>
            <i className="fa-regular fa-clock-four text-orange_2 me-4 text-3xl"></i>
            <div className={"font-inter text-gray-500"}>
              <div className={"font-medium"}>Total</div>
              <div>{formatMinuteDuration(cookTime + userPreprationTime)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
