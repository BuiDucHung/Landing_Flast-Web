import HomePage from "@/component/FlastHome";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Flast Solution',
    description: 'Flast Solution',
    other: {
      'zalo-platform-site-verification': 'GDod6BhoFmDdmBGFdzHWB6MZmpg9qHTbDJa'
    }
  }
};

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
};
