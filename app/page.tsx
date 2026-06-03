import HomePage from "@/component/FlastHome";
import { Metadata } from "next";

// ── Page ───────────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Flast Solution',
    description: 'Flast Solution',
  };
}

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
