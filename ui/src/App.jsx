import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import "./index.css"; // Import Tailwind CSS
import "./App.css";
import ScoreCard from "./pages/ScoreCard";
import Layout from "./components/Layout/Layout";
import Teams from "./pages/admin/Teams";
import Players from "./pages/admin/Players";
import AdminScoreCard from "./pages/admin/AdminScoreCard";
import Fixtures from "./pages/admin/Fixtures";

function App() {
  // Check if user is an admin based on localStorage
  const isAdmin = localStorage.getItem("login-role") === "admin";
  const adminRoutes = [
    {
      Name: "Teams",
      path: "/admin/teams",
    },
    {
      Name: "Players",
      path: "/admin/players",
    },
    {
      Name: "Fixtures",
      path: "/admin/fixtures",
    },
  ];
  const userRoutes = [
    {
      Name: "Home",
      path: "/",
    },
    {
      Name: "Scores",
      path: "/score-card",
    },
  ];
  return (
    <Router>
      <Routes>
        {/* Non-admin routes */}
        <Route
          path="*"
          element={
            <Layout routes={userRoutes}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/team/:teamName" element={<TeamPage />} /> */}
                <Route path="/score-card" element={<ScoreCard />} />
              </Routes>
            </Layout>
          }
        />
        {/* Admin routes */}
        {isAdmin && (
          <Route
            path="/admin/*"
            element={
              <Layout routes={adminRoutes}>
                <Routes>
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/players" element={<Players />} />
                  <Route path="/score-card" element={<AdminScoreCard />} />
                  <Route path="/fixtures" element={<Fixtures />} />
                </Routes>
              </Layout>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
