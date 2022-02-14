import "styled-components";
declare module "styled-components" {
  export interface ThemesGlobal {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}
