import React from 'react'
import styled from 'styled-components'

import Container from '../layouts/Container'
import Item from '../layouts/Item'

import { Link } from 'gatsby'

const StyledHeader = styled.header`
  padding: 16px;
`

const Header = () => (
  <StyledHeader className="header">
    <Container flexDirection="column" alignItems="center">
      <Item align="center">
        <h1>Adith Widya Pradipta</h1>
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

export default Header