import Image from "next/image";
import Hello from "../pages/hellolist";
import HelloFetch from "../pages/hellofetch";
import Matchups from "../pages/matchups";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-8">Tekken 8 Data Visualizer</h1>
      <Image
        src="/tekken-logo.svg" // Replace with our Tekken-related image
        alt="Tekken Logo"
        width={250}
        height={100}
        priority
      />
      
      <p className="text-xl my-6">
        Visualize and analyze your Tekken 8 gameplay stats to enhance your skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Your Stats</h2>
          <p>Track your wins, losses, and improvement over time. this is HelloFetch</p>
          <Matchups/>

        </div>

        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Compare Characters</h2>
          <p>See which characters are your strongest picks.</p>
          {/* Insert interactive component or image */}
        </div>

        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Matchups Analysis</h2>
          <p>Discover strategies against different opponents.</p>
        </div>

        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Improve Your Game</h2>
          <p>Receive personalized tips based on your playstyle.</p>
          <HelloFetch/>
          {/* Insert interactive component or image */}
        </div>
        <Hello />
      </div>
    </main>
  );
}
