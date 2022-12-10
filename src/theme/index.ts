import { DefaultTheme } from "styled-components";

const fontSize = {
  fontSize: "14px",
};

const fontFamily = {
  nunito: "'Nunito', sans-serif;",
};

const colors = {
  primary: "#FBA7B4",
  secondary: "#6B6C6C",
  dark: "#272727",
  white: "#FAFAFA",
  background:
    "linear-gradient(180.14deg, #FBA7B4 0.12%, rgba(255, 91, 117, 0.804157) 74.54%);",
};

const borderRadiuses = {
  rounded: "50%",
  medium: "14px",
  xMedium: "20px",
};

const breakPoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const shadow = {
  primary: "0px 3px 6px rgba(0, 0, 0, 0.25)",
};

const theme: DefaultTheme = {
  shadow,
  colors,
  fontSize,
  fontFamily,
  breakPoints,
  borderRadiuses,
};

export default theme;
