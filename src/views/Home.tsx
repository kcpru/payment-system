import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 800px;
  background: #fff;
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 3rem auto;
  box-shadow: 0 1rem 3rem -1.5rem #00000090;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Droppay</h1>
      <p>Jest to system płatniczy do testowych aplikacji internetowych.</p>
      <p>Jak zaimplementować?</p>
      <p>Jeszcze nie wiadomo.</p>
    </Container>
  );
};

export default Home;
