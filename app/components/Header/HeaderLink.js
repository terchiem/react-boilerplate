import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #333;
  color: #333;

  &:hover {
    background: #333;
    color: #fff;
  }

  &:active {
    border: 2px solid #888;
    background: #888;
    color: #fff;
  }
`;
