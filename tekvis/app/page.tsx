import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Hello from "../pages/hellolist";
import HelloFetch from "../pages/hellofetch";
import Matchups from "../pages/matchups";
import CompareCharacter from '@/pages/CompareCharacters';
import MatchupAnalysis from '@/pages/MatchupAnalysis';
import ImproveGame from '@/pages/ImproveGame';
import PlayerDataEditor from '@/pages/PlayerDataEditor'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-8">Tekken 8 Data Visualizer</h1>
      <div>
        <Image
          src="/tekken-logo.svg" // Replace with our Tekken-related image
          alt="Tekken Logo"
          width={150}
          height={100}
          priority
        />
      </div>
      
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
          <CompareCharacter/>
        </div>

        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Match-ups Analysis</h2>
          <p>Discover strategies against different opponents.</p>
          <MatchupAnalysis/>
        </div>

        <div className="rounded-lg border border-gray-300 shadow p-4 flex flex-col items-center">
          <h2 className="font-semibold mb-3">Improve Your Game</h2>
          <p>Receive personalized tips based on your playstyle.</p>
          <ImproveGame/>
        </div>
        <PlayerDataEditor />
      </div>
    </main>
  );
}
