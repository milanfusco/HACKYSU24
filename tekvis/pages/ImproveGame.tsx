import { GetServerSideProps } from 'next';
import MATCHESLIST from "./MatchesList"

const matchesList = MATCHESLIST()

export default function ImproveGame() {
  return (
    <div>
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
