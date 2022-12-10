import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
      font-family:${({ theme }) => theme.fontFamily.nunito};
      font-size: 14px;
      box-sizing: border-box;
      padding: 0px;
      border:0px;

    }
  `;

export default GlobalStyles;
