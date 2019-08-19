import React from "react"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Container justify="center">
      <Item>
        <h6>© {currentYear} - Adith Widya Pradipta</h6>
      </Item>
    </Container>
  )
}

export default Footer
