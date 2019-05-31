/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Header from "./header"
import "./layout.scss"

const theme = {
  purple: "#9B51E0",
  darkGray: "#333333",
  blue: "#264269",
  snow: "#E0E0E0",
  black: "#130c16",
  lgBreak: "1300px",
  maxWidth: "1000px",
}
createGlobalStyle` 
  html{
    box-sizing: border-box;
    font-size: 8px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: ${theme.purple};
  }
`
const LayoutPage = styled.div`
  margin: 0 auto;
  padding-top: 0px 1.0875rem 1.45rem;
  background: linear-gradient(
    180deg,
    #9b51e0 0%,
    #264269 0%,
    #864eca 100%,
    #264269 100%
  );
  min-height: 100vh;
  color: ${props => props.theme.snow};
`
const Inner = styled.main``

const Layout = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  // render={data => (
  <ThemeProvider theme={theme}>
    <LayoutPage>
      <Inner>{children}</Inner>
      <footer>
        © {new Date().getFullYear()}, Built with 💙 by
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutPage>
  </ThemeProvider>
  // )}
  // />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
