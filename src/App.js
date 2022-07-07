import React from "react";
import styled from "styled-components";
import "./App.css";
import GBCanvas from "./Components/GbCanvas";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #36454f;
  color: #f1f1f1;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>3D Model</Title>
        <GBCanvas />
      </Wrapper>
    </Container>
  );
};

export default App;
