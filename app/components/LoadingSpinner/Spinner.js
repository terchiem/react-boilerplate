import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 6px solid #eee;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.6s cubic-bezier(0.39, 0.66, 0.72, 0.78) infinite;
`;

export default Spinner;
