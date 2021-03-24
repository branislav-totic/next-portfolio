import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  background-color: red;

  ${({ isHidden }) => isHidden && css`
    max-height: 100vh;
  `}
`;

export const Wrapper = styled.div`
  height: 100vh;
  padding: 100px 40px 0;
`;
