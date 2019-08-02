import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Container from '../layouts/Container'
import Item from '../layouts/Item'

const StyledHeader = styled.header`
  padding: 16px;
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
    <StyledHeader id="header">
      <Container flexDirection="column" alignItems="center">
        <Item align="center">
          <h1>{data.site.siteMetadata.title}</h1>
        </Item>
        <Item>
          <Container spacing={16}>
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
      </Container>
    </StyledHeader>
  )
}

export default Header