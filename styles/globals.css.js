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
    src: url("/fonts/GrimPrint/Grimpt-PrintLight.woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "GrimPrint";
    src: url("/fonts/GrimPrint/Grimpt-PrintRegular.woff");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "GrimPrint";
    src: url("/fonts/GrimPrint/Grimpt-PrintBold.woff");
    font-style: medium;
    font-weight: 700;
    font-display: swap;
  }
`;

export const Contianer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Root = styled.div`
  min-height: 100vh;
  font-family: GrimPrint;
  font-weight: 700;
`;
