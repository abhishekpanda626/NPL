import React from "react";
import BattingCard from "../components/BattingCard";
import BowlingCard from "../components/BowlingCard";
import Accordion from "./Accordion";

const TeamInnings = ({ title, battingPlayers, bowlingPlayers }) => {
  const isCaptain = true;
  const isWicketKeeper = false;
  const remainingBatters = [];

  return (
    <div>
      <Accordion title={title+" Innings"}>
        <BattingCard
          players={battingPlayers}
          remainingBatters={remainingBatters}
          isCaptain={isCaptain}
          isWicketKeeper={isWicketKeeper}
        />

        <BowlingCard
          players={bowlingPlayers}
          isCaptain={isCaptain}
          isWicketKeeper={isWicketKeeper}
        />
      </Accordion>
    </div>
  );
};

export default TeamInnings;
