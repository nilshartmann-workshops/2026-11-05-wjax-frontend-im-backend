"use client";
import Link from "next/link";
import { ReactNode } from "react";

import { Button, CheckLabel } from "@/app/components/Button.tsx";

type OrderButtonProps = {
  children: ReactNode;
  orderBy?: "likes" | "time";
  currentSearchParams: Record<string, string>;
};
export function OrderButton({
  orderBy,
  currentSearchParams,
  children,
}: OrderButtonProps) {
  const currentOrderBy = currentSearchParams.orderBy;

  const nextSearchParams = new URLSearchParams(currentSearchParams);
  if (orderBy) {
    nextSearchParams.set("orderBy", orderBy);
  } else {
    nextSearchParams.delete("orderBy");
  }

  const href = `/recipes?${nextSearchParams.toString()}`;

  const checked = orderBy === (currentOrderBy || undefined);

  return (
    <Button checked={checked}>
      <CheckLabel checked={checked}>
        {checked ? children : <Link href={href}>{children}</Link>}
      </CheckLabel>
    </Button>
  );
}
