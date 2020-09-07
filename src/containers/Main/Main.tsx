import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useObject } from 'react-firebase-hooks/database';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';

import { Pin, Quiz } from '../';
import { base } from '../../config';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimationAiOutlineLoading = styled(AiOutlineLoading)`
  animation: ${rotate} 0.8s linear infinite;
  font-size: 6rem;
  color: black;
  position: absolute;
`;

const Main = () => {
  let { id } = useParams();
  const [value, loading, error] = useObject(base.ref(id));
  console.log(value?.val());

  return (
    <Container>
      {value && value?.val()?.amount && <Quiz value={value.val()} />}
      {loading && <AnimationAiOutlineLoading />}
      {(error || !value?.val()?.amount) && !loading && (
        <h1 style={{ fontSize: '4rem', position: 'absolute' }}>Błąd</h1>
      )}
      <Pin />
    </Container>
  );
};

export default Main;
