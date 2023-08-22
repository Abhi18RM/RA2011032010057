import React from "react";
import Navbar from "../components/Navbar";
import TrainDetails from "../components/TrainDetails";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
    padding: 60px;
`;

const TrainStatus = () => {
    const trainNumber = useParams();
    console.log(trainNumber);
    return (
        <>
            <Navbar />
            <Container>
                <TrainDetails trainNumber={trainNumber} />
            </Container>
        </>
    );
};

export default TrainStatus;
