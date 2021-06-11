import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImage = styled(GatsbyImage)`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */

  /* &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
`

const FeaturedImage = ({ image }) => <StyledImage image={image} />

FeaturedImage.propTypes = {
  image: PropTypes.object,
}

export default FeaturedImage
