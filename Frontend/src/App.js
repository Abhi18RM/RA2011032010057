import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainStatus from "./pages/TrainStatus";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/train/:trainNumber" element={<TrainStatus />} />
            </Routes>
        </Router>
    );
}
