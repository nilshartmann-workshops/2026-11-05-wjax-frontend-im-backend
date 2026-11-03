import { showRenderedAt } from "@/app/demo-config.tsx";

// 🔎 Zeigen:
//   new Date() = Render-Zeitpunkt auf dem Server.
//   In "use cache": friert beim Cache-Fill ein.
//   Dynamisch (in <Suspense>): springt pro Request.

type RenderedAtProps = {
  label: string;
};

export function RenderedAt({ label }: RenderedAtProps) {
  if (!showRenderedAt) return null;

  const now = new Date();
  const time = now.toLocaleTimeString("de-DE");

  return (
    <p
      className={
        "mt-2 inline-block rounded bg-amber-200 px-2 py-1 font-mono text-sm font-semibold text-amber-900"
      }
    >
      {label} {time}
    </p>
  );
}
