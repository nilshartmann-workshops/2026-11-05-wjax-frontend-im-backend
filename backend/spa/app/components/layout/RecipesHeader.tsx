import Link from "next/link";
import { ReactNode } from "react";

import { H1 } from "../Heading.tsx";

type RecipesHeaderProps = {
  children?: ReactNode;
};

export default function RecipesHeader({ children }: RecipesHeaderProps) {
  return (
    <>
      <header
        className={"flex h-24 items-center bg-cover bg-center"}
        style={{
          backgroundImage: "url('/assets/images/landing-page.png')",
        }}
      >
        <div className={"container mx-auto"}>
          <div className={"flex h-full items-center justify-between"}>
            <div className={"font-space text-red flex items-center font-bold"}>
              <H1 className={"inline-block bg-white p-2 pb-3 text-4xl"}>
                <Link href={"/recipes"} className={"hover:underline"}>
                  Recipify
                </Link>
              </H1>
              {/*<div className={"ms-2 shrink-0 bg-white p-1 text-xl"}>*/}
              {/*  <span className="text-green">Next.js/React</span> Edition*/}
              {/*</div>*/}
            </div>
            {children}
          </div>
        </div>
      </header>
    </>
  );
}
