import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledPageContainer = styled.section`
  && {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  ${(props) =>
    props.noPadding &&
    css`
      padding: unset !important;
    `}

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
    ${(props) =>
      props.mobileFirst &&
      css`
        max-width: 720px;
      `}
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
    ${(props) =>
      props.mobileFirst &&
      css`
        max-width: 720px;
      `}
  }
`

const SectionContainer = ({ mobileFirst, noPadding, ...props }) => (
  <StyledPageContainer
    className="section-container"
    mobileFirst={mobileFirst}
    noPadding={noPadding}
    {...props}
  />
)

SectionContainer.propTypes = {
  mobileFirst: PropTypes.bool,
}

SectionContainer.defaultProps = {
  mobileFirst: false,
  noPadding: false,
}

export default SectionContainer
