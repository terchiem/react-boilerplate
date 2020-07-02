import styled from 'styled-components';

const Button = styled.button`
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #333;
  background: #fff;
  color: #333;

  &:hover {
    background: #333;
    color: #fff;
  }

  &:active {
    background: #888;
    border: 2px solid #888;
  }
`;

export default Button;
