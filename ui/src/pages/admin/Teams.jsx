import React, { useState } from "react";

const Teams = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: "Team A", captain: "Player 1", coach: "Coach 1" },
    { id: 2, name: "Team B", captain: "Player 2", coach: "Coach 2" },
    { id: 3, name: "Team C", captain: "Player 3", coach: "Coach 3" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: "", captain: "", coach: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam({ ...newTeam, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new team to the teams array
    setTeams([...teams, { ...newTeam, id: teams.length + 1 }]);
    // Close the modal
    setModalOpen(false);
    // Clear input fields
    setNewTeam({ name: "", captain: "", coach: "" });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      {/* Add Team Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
      >
        Add Team
      </button>

      {/* Table of Teams */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Captain</th>
            {/* <th className="px-4 py-2 text-left">Coach</th> */}
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id} className="border-b">
              <td className="px-4 py-2">{team.id}</td>
              <td className="px-4 py-2">{team.name}</td>
              <td className="px-4 py-2">{team.captain}</td>
              {/* <td className="px-4 py-2">{team.coach}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Team Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Team</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="teamName" className="block text-gray-700">
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="name"
                  value={newTeam.name}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter team name"
                  required
                />
              </div>
              <div>
                <label htmlFor="captain" className="block text-gray-700">
                  Captain
                </label>
                <input
                  type="text"
                  id="captain"
                  name="captain"
                  value={newTeam.captain}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter captain's name"
                  required
                />
              </div>
              <div>
                <label htmlFor="coach" className="block text-gray-700">
                  Coach
                </label>
                <input
                  type="text"
                  id="coach"
                  name="coach"
                  value={newTeam.coach}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter coach's name"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
