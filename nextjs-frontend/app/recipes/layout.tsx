import { ReactNode } from "react";

import RecipesHeader from "@/app/components/layout/RecipesHeader.tsx";
import { Timer } from "@/app/components/Timer.tsx";

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
      <RecipesHeader>
        {/* 🕵️‍♂️ Zeigen: Timer starten, zwischen Liste und Detailseite wechseln,
            der Timer läuft weiter */}
        <Timer />
      </RecipesHeader>
      <main>{children}</main>
    </div>
  );
}
