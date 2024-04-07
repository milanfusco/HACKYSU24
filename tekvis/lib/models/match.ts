// models/match.ts

interface Match {
  _id: string;
  Session: string; //Date; //ISO 8601 format  2024-04-07
  MatchupID: number;
  MatchupType: string; //["Quick", "Ranked"];
  Player: "Jun"; // This is you should be user.player["Jun","Asuka"];
  Opponent: string; //["Jun","Asuka", "Kuma", "", "", ""];
  PlayerWinLoss: string; //["W", "L"];
  MATCH1: {M1RW: number,M1RL:number};
  MATCH2: {M2RW: number,M2RL:number};
  MATCH3: {M2RW: number,M2RL:number}
}

// Export a module-scoped Model Match component
export default Match;
