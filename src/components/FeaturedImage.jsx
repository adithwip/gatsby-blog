import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImage = styled(GatsbyImage)`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const FeaturedImage = ({ image }) => (
  <StyledImage image={image} alt="Featured Image" />
)

FeaturedImage.propTypes = {
  image: PropTypes.object,
}

export default FeaturedImage
