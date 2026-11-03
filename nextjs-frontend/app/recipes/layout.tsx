import { ReactNode } from "react";

import RecipesHeader from "@/app/components/layout/RecipesHeader.tsx";

// 🔎 Zeigen:
//   Layout = normale React-Komponente.
//   Rahmt alle Seiten der Route ein.
//   "children" = die jeweilige Seite (Komposition).

type RecipesLayoutProps = {
  children: ReactNode;
};

export default function RecipesLayout({ children }: RecipesLayoutProps) {
  return (
    <div className={"RecipesLayout"}>
      <RecipesHeader></RecipesHeader>
      <main>{children}</main>
    </div>
  );
}
