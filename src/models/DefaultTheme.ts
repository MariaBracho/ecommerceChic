import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      white: string;
      background: string;
    };
    borderRadiuses: {
      rounded: string;
      medium: string;
      xMedium: string;
    };
    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadow: {
      primary: string;
    };
    fontFamily: {
      nunito: string;
    };
    fontSize: object;
  }
}
