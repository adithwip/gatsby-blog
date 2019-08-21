import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Headroom from "react-headroom"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledHeader = styled(Headroom)`
  padding: 16px;

  & .headroom--scrolled {
    background-color: white;
  }
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <Container flexDirection="column" alignItems="center">
        <Item align="center">
          <h1>{data.site.siteMetadata.title}</h1>
        </Item>
        <StyledHeader>
          <Item align="center">
            <Container spacing={16} justify="center">
              <Item>
                <Link to="/">Home</Link>
              </Item>
              <Item>
                <Link to="/about">About</Link>
              </Item>
              <Item>
                <Link to="/blog">Blog</Link>
              </Item>
            </Container>
          </Item>
        </StyledHeader>
      </Container>
    </header>
  )
}

export default Header
