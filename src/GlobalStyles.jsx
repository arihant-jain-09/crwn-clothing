import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed', sans-serif;
    padding:20px 60px;

    @media screen and (max-width:800px){
        padding:10px;
    }
  }
  a {
    color:black;
    text-decoration:none;
  }
  *{
    box-sizing: border-box;
  }  

`

export default GlobalStyles
