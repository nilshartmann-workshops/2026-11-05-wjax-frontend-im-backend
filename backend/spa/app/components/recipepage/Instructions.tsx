import { Fragment } from "react";

import { DetailedRecipeDto } from "@/app/_generated";

type InstructionsProps = {
  recipe: DetailedRecipeDto;
};

export function Instructions({ recipe }: InstructionsProps) {
  return (
    <>
      <h2 className={"font-space mt-8 mb-8 text-3xl font-bold"}>
        Instructions
      </h2>
      <div className={"ms-4 me-4"}>
        {recipe.instructions.map((i) => (
          <Fragment key={i.orderNo}>
            <div
              className={
                "mt-8 items-start border-b border-dotted border-gray-300 pb-8 sm:flex"
              }
            >
              <div className={"font-space text-red font-medium sm:w-1/4"}>
                Step {i.orderNo}
              </div>
              <div
                className={
                  "font-inter mt-4 text-gray-500 sm:mt-0 sm:w-3/4 sm:pe-1.5"
                }
              >
                {i.description}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
