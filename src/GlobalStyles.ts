import { createGlobalStyle } from 'styled-components'
import BackgroundImg from '../src/images/background.png'
const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;
  }
`

export default GlobalStyle
