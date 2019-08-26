import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const VerticalLine = styled.div`
  border-left: 1px solid black;
  height: 100px;
`

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "footer-icon.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const currentYear = new Date().getFullYear()

  return (
    <Container flexDirection="column" alignItems="center" spacing={32}>
      <Item>
        <VerticalLine />
      </Item>
      <Item>
        <Img fixed={data.logo.childImageSharp.fixed} />
      </Item>
      <Item>
        <h6>© {currentYear} - Adith Widya Pradipta</h6>
      </Item>
    </Container>
  )
}

export default Footer
