import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function TeamPage() {
  const { teamName } = useParams();
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md py-8 px-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Team: {teamName}</h1>
        <h2 className="text-lg mb-4">Score: {score}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={updateScore}
        >
          Update Score
        </button>
      </div>
    </div>
  );
}

export default TeamPage;
