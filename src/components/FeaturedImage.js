import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  /* &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
`

const FeaturedImage = props => <StyledImage fluid={props.fluid} />

export default FeaturedImage
