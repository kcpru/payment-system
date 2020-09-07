import styled from 'styled-components';

const Input = styled.input`
  border-radius: 2rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  border: none;
  font-weight: bold;
  box-shadow: 0 1rem 3rem -1.5rem #00000090;
  letter-spacing: 6px;

  &:focus {
    outline: none;
  }
`;

export default Input;
