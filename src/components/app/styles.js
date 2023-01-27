import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  //Компенсируем ширину скролла (при его наличии)
  html {
    margin-left: calc(100vw - 100%);
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 150%;
    font-weight: 400;
    color: ${(props) => props.theme.colorFontBlack};
  }

`;
