import { ContentCard } from "@/components/card";
import { Button, DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Test</h1>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map(x => <ContentCard key={x}></ContentCard>)}
      </div>
    </>
  );
}
