import styled, { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
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

export const Contianer = styled.div``;

export const Root = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: GrimPrint;
  font-weight: normal;
`;
