import { createGlobalStyle } from "styled-components";

//! font-family: 'Fira Code', monospace;
//! font-family: 'Montserrat', sans-serif;
export const GlobaStyle = createGlobalStyle`
  :root{
    --white:#FFFFFF;
    --black:#000000;

    //gray
    --gray-50:#F7FAFC;
    --gray-100:#EDF2F7;
    --gray-200:#E2E8F0;
    --gray-300:#CBD5E0;
    --gray-400:#A0AEC0;
    --gray-500:#718096;
    --gray-600:#4A5568;
    --gray-700:#2D3748;
    --gray-800:#1A202C;
    --gray-900:#171923;

    //blue
    --blue-300:#63B3ED;
    --blue-400:#4299E1;
    --blue-500:#3182CE;
    --blue-600:#2B6CB0;
    --blue-700:#2C5282;
  }
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
  html,body,#root{
    width: 100%;
    height: 100%;
  }
  body,button,input,a,textarea{
    font-family: 'Fira Code', monospace;
  }
 input,button{
    border: none;
    outline: none;
  }

  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`;
