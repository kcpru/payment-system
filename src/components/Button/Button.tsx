import styled from 'styled-components';

const Button = styled.button`
  border-radius: 2rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  box-shadow: 0 1rem 3rem -1.5rem #00000090;
  cursor: pointer;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }
`;

export default Button;
