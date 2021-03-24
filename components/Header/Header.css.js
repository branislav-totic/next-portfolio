import styled, { css } from "styled-components";

export const Container = styled.header`
  position: fixed;
  text-align: center;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
`;

export const Menu = styled.div`
  z-index: 1;
  width: 100%;
  padding: 15px 40px 10px;
  display: flex;
  justify-content: space-between;
`;

export const Hamburger = styled.div`
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  background: #000;
  height: 20px;
  width: 20px;
`;

export const HamburgerBox = styled.div``;

export const HamburgerInner = styled.div``;

export const ScrollBar = styled.div`
  width: 100%;
  height: 2px;
  top: 0;
  left: 0;
  background: #cccccc;
`;

export const ScrollProgress = styled.div`
  width: 0;
  height: inherit;
  background: linear-gradient(90deg, rgba(36,94,0,1) 0%, rgba(85,223,46,1) 100%);
`;
