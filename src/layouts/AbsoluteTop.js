import React from "react"
import styled from "styled-components"

const StyledElement = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  top: 0;
  left: 0;
`

const AbsoluteTop = props => (
  <StyledElement className="absolute-top" {...props} />
)

export default AbsoluteTop
