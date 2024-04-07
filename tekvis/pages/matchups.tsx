import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from 'next';
import MATCHESLIST from "./MatchesList"

const WINLOSSPROPS = ["W", "L"];
const MatchupTypePROPS = ["Quick", "Ranked"];
const CHARACTERS = ["Jun","Asuka", "Kuma", "Dragunov", "Lee", "Yoshimitsu", "Xiaoyu"]; 

const matchesList = MATCHESLIST()

interface Match {
   _id: string;
   Session: string;
   MatchupID: number;
   MatchupType: string; //["Quick", "Ranked"];
   Player: "Jun"; //["Jun","Asuka"];
   Opponent: string; //["Jun","Asuka", "Kuma", "", "", ""];
   PlayerWinLoss: string; //["W", "L"];
   MATCH1: {M1RW: number,M1RL:number};
   MATCH2: {M2RW: number,M2RL:number};
   MATCH3: {M2RW: number,M2RL:number}
}

interface MatchProps {
   matches: Match[];
}

export default function Matches() {
  return (
    <div>
        <h1>Top 20 Matches of All Time</h1>
        <p>
            <small>(based on Tekken8 greatest player eveahhh)</small>
        </p>
        <ul>
            <p>Match ID,  Match Player, Match Opponent, Player Win/Loss</p>
            {matchesList?.map((match) => (
                <li key={match._id}>
                    <p>{match.MatchupID}, {match.Player}, 
                    {match.Opponent},
                    {match.PlayerWinLoss}</p>
                </li>
            ))}
        </ul>
    </div>
);
}


export const getServerSideProps: GetServerSideProps = async () => {
   try {
       console.log('getServerSideProps db query');
      //  const client = await clientPromise;
      //  //mongodb://localhost:27017/smstest?readPreference=primary&ssl=false
      //  const db = client.db("mongodbVSCodePlaygroundDB");
       
      //  const matches = await db
      //      .collection("matches")
      //      .find({})
      //      .limit(20)
      //      .toArray();

      const matches = [ {"_id" : "661224c58d3a4e32028ce257",
      "Session" : "2024-04-01",
      "MatchupID" : 2,
      "MatchupType" : "Ranked",
      "Player" : "Jun",
      "Opponent" : "Kuma",
      "PlayerWinLoss" : "L"
  }, {
    "_id" : "661224c58d3a4e32028ce256",
    "Session" : "2024-04-01",
    "MatchupID" : 1,
    "MatchupType" : "Quick",
    "Player" : "Jun",
    "Opponent" : "Asuka",
    "PlayerWinLoss" : "W"
}]

       return {
           props: { matches: JSON.parse(JSON.stringify(matches)) },
       };
   } catch (e) {
       console.error(e);

       return { props: { matches: [] } };
   }
};