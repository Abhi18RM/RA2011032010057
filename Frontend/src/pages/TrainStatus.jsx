import React from "react";
import Navbar from "../components/Navbar";
import TrainDetails from "../components/TrainDetails";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
    padding: 60px;
`;

const TrainStatus = ({ data }) => {
    const trainNumber = useParams();
    return (
        <>
            <Navbar />
            <Container>
                <TrainDetails trainNumber={trainNumber} trainDetails={data} />
            </Container>
        </>
    );
};

export default TrainStatus;
