import React from "react"
import Helmet from "react-helmet"
import NavBar from "./nav-bar"
import { createGlobalStyle } from "styled-components"
import lovelo from "../fonts/Lovelo_Black.ttf"
import { sizes } from "../constants"
import "semantic-ui-css/semantic.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Lovelo;
    src: url(${lovelo});
    font-weight: 900;
  }

  html {
    font-size: 10px;

    @media screen and (max-width: ${sizes.b_tablet}px) {
      font-size: 8px;
    }
  }

  html, body {
    font-family: 'NanumSquare', sans-serif;
  }
  
  .carousel-control {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none !important;
  }

  .container {
    @media screen and (max-width: ${sizes.b_tablet}px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .navbar-header {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
    </Helmet>
    <GlobalStyle />
    <NavBar />
    {children}
  </>
)

export default Layout
