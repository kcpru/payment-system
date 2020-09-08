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
    content: 'PAY';
    display: inline-block;
    left: 7px;
    color: #dd4d8c;
    z-index: -1;
  }
`;

const Logo = () => {
  return (
    <Container>
      DRO<Span>P</Span>
    </Container>
  );
};

export default Logo;
