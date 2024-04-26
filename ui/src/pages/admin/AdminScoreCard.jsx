import React, { useState } from "react";
import Batsman from "../../components/admin/scorecard/Batsman";
import Bowler from "../../components/admin/scorecard/Bowler";
import Runs from "../../components/admin/scorecard/Runs";
import Extras from "../../components/admin/scorecard/Extras";
import Wicket from "../../components/admin/scorecard/Wicket";
import BatsmanInfo from "../../components/admin/scorecard/BatsmanInfo";
import BowlerInfo from "../../components/admin/scorecard/BowlerInfo";
import OverSummary from "../../components/admin/scorecard/OverSummary";

const AdminScoreCard = () => {
  const [batsman1, setBatsman1] = useState({ name: "", runs: 0 });
  const [batsman2, setBatsman2] = useState({ name: "", runs: 0 });
  const [bowlerName, setBowlerName] = useState("");
  const [runs, setRuns] = useState(0);
  const [extras, setExtras] = useState(0);
  const [totalRuns, setTotalRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overData, setOverData] = useState([]);
  const [bowlerScore, setBowlerScore] = useState(0);

  const handleRuns = (run) => {
    setRuns(runs + run);
    setTotalRuns(totalRuns + run);
    setBalls(balls + 1);
    setOverData([...overData, run]);

    // Switch batsmen after every odd run
    if (run % 2 !== 0) {
      if (batsman1.runs === 0) {
        setBatsman1({ ...batsman1, runs: run });
      } else if (batsman2.runs === 0) {
        setBatsman2({ ...batsman2, runs: run });
      } else {
        if (batsman1.runs === 0 || batsman2.runs !== 0) {
          setBatsman1({ ...batsman1, runs: run });
          setBatsman2({ ...batsman2, runs: 0 });
        } else {
          setBatsman1({ ...batsman1, runs: run });
        }
      }
    }

    // Handle overs
    if (balls === 5) {
      setOvers(overs + 1);
      setBalls(0);
      setBowlerName(""); // Reset bowler name after each over
      setOverData([]); // Reset over data
      promptForBowler(); // Prompt for new bowler
    }
  };

  const handleExtras = (extraType, extraRuns) => {
    setExtras(extras + extraRuns);
    setTotalRuns(totalRuns + extraRuns);

    // Exclude wides and no balls from increasing the ball count
    if (extraType !== "wide" && extraType !== "no ball") {
      setBalls(balls + 1);
      setOverData([...overData, extraType]);
    }

    // Handle overs
    if (balls === 5) {
      setOvers(overs + 1);
      setBalls(0);
      setBowlerName(""); // Reset bowler name after each over
      setOverData([]); // Reset over data
      promptForBowler(); // Prompt for new bowler
    }
  };

  const handleWicket = () => {
    // Prompt for type of dismissal
    const dismissalType = prompt(
      "Enter type of dismissal (bowled, lbw, caught out, runout, etc.):"
    );
    if (dismissalType) {
      if (dismissalType !== "runout") {
        setWickets(wickets + 1);
      }
      // Prompt for next batsman
      const nextBatsman = prompt("Enter name of the next batsman:");
      if (nextBatsman) {
        if (batsman1.runs === 0) {
          setBatsman1({ name: nextBatsman, runs: 0 });
        } else if (batsman2.runs === 0) {
          setBatsman2({ name: nextBatsman, runs: 0 });
        } else {
          if (batsman1.runs === 0 || batsman2.runs !== 0) {
            setBatsman1({ name: nextBatsman, runs: 0 });
            setBatsman2({ name: "", runs: 0 });
          } else {
            setBatsman1({ name: nextBatsman, runs: 0 });
          }
        }
      }
    }
  };

  const promptForBowler = () => {
    const newBowler = prompt("Enter name of the next bowler:");
    if (newBowler) {
      setBowlerName(newBowler);
      setBowlerScore(0); // Reset bowler's score
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to update scores
    // For now, let's just console log the values
    // console.log("Batsman 1 Name:", batsman1.name);
    // console.log("Batsman 2 Name:", batsman2.name);
    // console.log("Bowler Name:", bowlerName);
    // console.log("Runs:", runs);
    // console.log("Extras:", extras);
    // console.log("Total Runs:", totalRuns);
    // console.log("Wickets:", wickets);
    // console.log("Overs:", overs + "." + balls);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Admin Scorecard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Batsman
          label="Batsman 1 Name"
          value={batsman1.name}
          onChange={(e) => setBatsman1({ ...batsman1, name: e.target.value })}
        />
        <Batsman
          label="Batsman 2 Name"
          value={batsman2.name}
          onChange={(e) => setBatsman2({ ...batsman2, name: e.target.value })}
        />
        <Bowler
          value={bowlerName}
          onChange={(e) => setBowlerName(e.target.value)}
        />
        <Runs handleRuns={handleRuns} />
        <Extras handleExtras={handleExtras} />
        <Wicket handleWicket={handleWicket} />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Score
        </button>
      </form>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <BatsmanInfo label="Batsman 1" value={batsman1} />
          <BatsmanInfo label="Batsman 2" value={batsman2} />
          <BowlerInfo value={bowlerName} score={bowlerScore} />
        </div>
        <p className="font-semibold mt-4">Total Runs: {totalRuns}</p>
        <p>Batsman Score: {runs}</p>
        <p>Bowler Score: {bowlerScore}</p>
        <p>Wickets: {wickets}</p>
        <p>
          Overs: {overs}.{balls}
        </p>
        <OverSummary overData={overData} />
      </div>
    </div>
  );
};

export default AdminScoreCard;
