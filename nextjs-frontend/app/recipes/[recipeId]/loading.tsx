import GlobalLoadingIndicator from "@/app/components/GlobalLoadingIndicator.tsx";

// 🕵️‍♂️ Erzählen: loading.tsx legt Next.js als Suspense um die ganze Seite
export default function Loading() {
  return <GlobalLoadingIndicator />;
}
