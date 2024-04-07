import { GetServerSideProps } from 'next';
import MATCHESLIST from "./MatchesList"

const matchesList = MATCHESLIST()

export default function ImproveGame() {
  return (
    <div>
        <ul>
            <p> Player Win/Loss</p>
            {/* Do we want to sort or manipulate the data here? */}
            {matchesList?.map((match) => (
                <li key={match._id}>
                    <p> 
                      {match.PlayerWinLoss}, {match.Opponent}, {match.Player}
                    </p>
                </li>
            ))}
        </ul>
    </div>
);
}
