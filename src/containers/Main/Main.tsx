import React from 'react';
import styled from 'styled-components';

import { Pin, Quiz } from '../';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <Container>
      <Quiz />
      <Pin />
    </Container>
  );
};

export default Main;
