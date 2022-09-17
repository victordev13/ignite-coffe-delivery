import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
    font-size: 0.875rem;
  }

  h1, h2, h3, h4 {
    font-family: ${(props) => props.theme.fonts.header};
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-title']};
  }
`
