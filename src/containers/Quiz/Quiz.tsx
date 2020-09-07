import React from 'react';
import styled from 'styled-components';

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

type ValueType = {
   amount: number;
}

type Props = {
   value: ValueType;
};

const Quiz: React.FC<Props> = ({ value }) => {
  const { amount } = value;

  return (
    <Container>
      <ul>
        <li>{amount} zł</li>
      </ul>
    </Container>
  );
};

export default Quiz;
