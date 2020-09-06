import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 700;
  font-size: 3rem;
  color: #5ea5dd;
`;

const Span = styled.span`
  position: relative;

  &::after {
    position: absolute;
    content: 'P';
    display: inline-block;
    left: 7px;
    color: #dd4d8c;
  }
`;

const Logo = () => {
  return (
    <Container>
      DRO<Span>P</Span>AY
    </Container>
  );
};

export default Logo;
