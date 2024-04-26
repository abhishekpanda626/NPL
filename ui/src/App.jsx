import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import './index.css'; // Import Tailwind CSS
import './App.css';
import ScoreCard from './pages/ScoreCard';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:teamName" element={<TeamPage />} />
          <Route path="/score-card" element={<ScoreCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
