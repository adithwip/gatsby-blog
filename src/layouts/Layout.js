import React from 'react'

import PageContainer from './PageContainer'
import Container from './Container'
import Item from './Item'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <PageContainer mobileFirst>
      <Container flexDirection="column" spacing={16}>
        <Item>
          {props.children}
        </Item>
      </Container>
    </PageContainer>
    <Footer />
  </React.Fragment>
)

export default Layout