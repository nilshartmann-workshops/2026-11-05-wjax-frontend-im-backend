import Link from "next/link";

import { Button } from "@/app/components/Button.tsx";
import { H1 } from "@/app/components/Heading.tsx";

export default function LandingPage() {
  return (
    <main
      className={"min-w-screen grow bg-cover"}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)), url('/assets/images/landing-page.png')",
      }}
    >
      <div className="font-space px-4 pt-32 text-center font-bold">
        <div className="text-red mx-auto inline-block max-w-4xl bg-white p-2 pb-4 text-8xl">
          Recipify
        </div>

        <H1>
          <div
            className={
              "mx-auto mt-10 inline-block max-w-4xl bg-white p-2 pb-3 text-4xl font-bold text-gray-800"
            }
          >
            Recipes for{" "}
            <span className="text-primary relative whitespace-nowrap">
              <span className="text-red relative">hungry devs</span>
            </span>
            .
          </div>
        </H1>
        <div className="font-barlow mx-auto mt-10 max-w-2xl bg-white p-2 pb-3 text-lg font-normal tracking-wide">
          <p>There are a lot of cooking and recipe apps.</p>
          <p>
            But only this one is boiled with modern{" "}
            <span className="text-red relative">frontend and backend</span>{" "}
            ingredients.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Button size={"lg"}>
            <Link href={"/recipes"}>Let me in - I'm hungry! 😋</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
