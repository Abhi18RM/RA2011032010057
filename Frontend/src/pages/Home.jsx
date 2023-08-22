import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Trains from "../components/Trains";

const Container = styled.div`
    padding: 60px;
`;

const Home = ({ data }) => {
    return (
        <>
            <Navbar />
            <Container>
                <Trains trainData={data} />
            </Container>
        </>
    );
};

export default Home;
