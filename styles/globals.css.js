import styled, { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "GrimPrint";
    src: url("/fonts/GrimptPrint/Grimpt-PrintLight.woff") format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "GrimPrint";
    src: url("/fonts/GrimptPrint/Grimpt-PrintRegular.woff") format('woff');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GrimPrint";
    src: url("/fonts/GrimptPrint/Grimpt-PrintBold.woff") format('woff');
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
`;

export const Root = styled.div`
  min-height: 100vh;
  font-family: GrimPrint;
  font-weight: normal;
  background-color: #000;
  color: #fff;
`;

export const Contianer = styled.main``;

export const NavSpacer = styled.div`
  height: 50px;
`;
