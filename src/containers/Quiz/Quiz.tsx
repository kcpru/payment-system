import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 40rem;
  height: 40rem;
  background: #fff;
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 1rem 3rem -1.5rem #00000090;
`;

const Quiz: React.FC = () => {
  let { id } = useParams();
  return <Container>{id}</Container>;
};

export default Quiz;
