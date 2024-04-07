"use client"
import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from 'next';
import MATCHESLIST from "./MatchesList"
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { createRoot } from 'react-dom/client';

const columns = [
    { key: '_id', name: 'ID' },
    { key: 'MatchupID', name: 'MatchupID' },
    { key: 'MatchupType', name: 'MatchupType' },
    { key: 'Player', name: 'Player' },
    { key: 'Opponent', name: 'Opponent' },
    { key: 'PlayerWinLoss', name: 'PlayerWinLoss' } ];

// Row Data: The data to be displayed.
const rowData = MATCHESLIST()

 // Column Definitions: Defines the columns to be displayed.
 const colDefs = [
    { field: "_id" },
    { field: "MatchupID" },
    { field: "MatchupType" },
    { field: "Player" },
    { field: "Opponent" },
    { field: "PlayerWinLoss" }
  ];

export default function PlayerDataEditor() {
  return (
    <div>

        <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <AgGridReact
                columnDefs={colDefs}
            />

        </div>

          
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