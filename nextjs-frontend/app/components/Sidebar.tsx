import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className={"mt-8 mb-8 flex w-full flex-col gap-y-8"}>{children}</div>
  );
}
