import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Theme from "../theme";

export default function ThemeContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
