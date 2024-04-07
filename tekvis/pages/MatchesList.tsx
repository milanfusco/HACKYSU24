// MatchList is a static "stub" of a mongo query as-if we could actually get it working. 
// fake until you make it work. :) 

export default function MatchesList() {
  return (
  [ {"_id" : "661224c58d3a4e32028ce257",
    "Session" : "2024-04-01",
    "MatchupID" : 2,
    "MatchupType" : "Ranked",
    "Player" : "Jun",
    "Opponent" : "Kuma",
    "PlayerWinLoss" : "L",
    MATCH1: {M1RW: 2,M1RL:1},
    MATCH2: {M1RW: 2,M1RL:1},
    MATCH3: {M1RW: 1,M1RL:2}
  }, {
    "_id" : "661224c58d3a4e32028ce256",
    "Session" : "2024-04-01",
    "MatchupID" : 1,
    "MatchupType" : "Quick",
    "Player" : "Jun",
    "Opponent" : "Asuka",
    "PlayerWinLoss" : "W", 
    MATCH1: {M1RW: 2,M1RL:1},
    MATCH2: {M1RW: 2,M1RL:1},
    MATCH3: {M1RW: 1,M1RL:2}
  }, {
    "_id" : "661324c58d3a4e32028ce256",
    "Session" : "2024-04-01",
    "MatchupID" : 3,
    "MatchupType" : "Quick",
    "Player" : "Jun",
    "Opponent" : "Asuka",
    "PlayerWinLoss" : "W", 
    MATCH1: {M1RW: 2,M1RL:1},
    MATCH2: {M1RW: 2,M1RL:1},
    MATCH3: {M1RW: 1,M1RL:2}
  }
  ]
  );
}
