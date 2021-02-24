import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*,
*:active,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-transform: none;
  text-decoration: none;
  color: #1fde6f;
  border: none;
  outline: none;
}

body {
  letter-spacing: 5px;
  background: #0C1C02;
  font-family: 'DotGothic16', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #1fde6f;
  text-shadow: 0 0 10px #1fde6f;
  
  @media (max-width: 580px) {
    letter-spacing: 3px;
  }
}`

export default GlobalStyle
