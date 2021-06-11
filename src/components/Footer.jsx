import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const VerticalLine = styled.div`
  border-left: 1px solid black;
  height: 100px;
`

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      {
        logo: file(relativePath: { eq: "footer-icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 80, height: 80, layout: FIXED)
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
        <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} />
      </Item>
      <Item>
        <h6>© {currentYear} - Adith Widya Pradipta</h6>
      </Item>
    </Container>
  )
}

export default Footer
