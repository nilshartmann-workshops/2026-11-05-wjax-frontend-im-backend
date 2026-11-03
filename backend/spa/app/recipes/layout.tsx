import { ReactNode } from "react";

import RecipesHeader from "@/app/components/layout/RecipesHeader.tsx";

export default function RecipesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"RecipesLayout"}>
      <RecipesHeader />
      <main>{children}</main>
    </div>
  );
}
