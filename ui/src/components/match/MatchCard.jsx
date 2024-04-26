// MatchCard.js
import React from 'react';

const MatchCard = ({ match }) => {
  const isLive = match.status === 'live'; // Assuming 'status' indicates whether the match is live or not

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8 relative">
      {isLive && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg text-xs font-semibold">
          Live
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{match.opponent} vs {match.team}</h3>
      <p className="text-sm text-gray-600">{match.date}</p>
      <p className="text-sm text-gray-600">{match.result}</p>
    </div>
  );
};

export default MatchCard;
