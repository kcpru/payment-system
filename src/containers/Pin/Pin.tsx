import React from 'react';
import styled from 'styled-components';

import { Input, Button } from '../../components';

const Container = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 2rem;
  box-sizing: border-box;
  margin: 1rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
`;

const Pin: React.FC = () => {
  return (
    <Container>
      <Button onClick={() => console.log('accept')}>Akceptuj</Button>
      <Input />
    </Container>
  );
};

export default Pin;
