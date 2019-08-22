import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Headroom from "react-headroom"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledHeader = styled.header`
  padding: 8px 16px;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: #fff;
`

const StyledHeadroom = styled(Headroom)`
  & .headroom--scrolled {
    padding: 8px 16px;
    background-color: #fbfcfb;
    border-bottom: 1px solid #e5f0e9;

    .grid-container {
      max-width: 1080px;
      margin: 0 auto;
    }
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
    <StyledHeader>
      <StyledHeadroom>
        <Container
          alignItems="center"
          alignContent="center"
          justify="space-between"
          flexWrap="wrap"
        >
          <Item flex={1}>
            <h4 style={{ margin: 0 }}>
              {data.site.siteMetadata.title}
            </h4>
          </Item>
          <Item flex={2}>
            <Item>
              <Container spacing={16} justify="flex-end">
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
          </Item>
        </Container>
      </StyledHeadroom>
    </StyledHeader>
  )
}

export default Header
