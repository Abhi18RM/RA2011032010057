import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainStatus from "./pages/TrainStatus";
import axios from "axios";

export default function App() {
    const [trainData, setTrainData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reqBody = {
                    companyName: "Train Central",
                    clientID: "d81d8dfa-9dc7-4c06-bc1c-4c44399ce165",
                    clientSecret: "zubklHSaxZVdHppA",
                    ownerName: "Abhiram",
                    ownerEmail: "rv2890@srmist.edu.in",
                    rollNo: "RA2011032010057",
                };

                const response = await axios.post(
                    "http://20.244.56.144/train/auth",
                    reqBody
                );
                const headers = {
                    Authorization: `Bearer ${response.data.access_token}`,
                };
                const res = await axios.get(
                    "http://20.244.56.144/train/trains",
                    {
                        headers,
                    }
                );
                setTrainData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    console.log(trainData);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home data={trainData} />} />
                <Route
                    path="/train/:trainNumber"
                    element={<TrainStatus data={trainData} />}
                />
            </Routes>
        </Router>
    );
}
