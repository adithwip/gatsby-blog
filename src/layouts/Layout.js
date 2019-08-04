import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import PageContainer from "./PageContainer"
import Container from "./Container"
import Item from "./Item"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ siteTitle, siteDescription, smallHeader, children }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="Description" content={siteDescription} />
      <title>{`Adith Widya Pradipta - ${siteTitle}`}</title>
      <link rel="canonical" href="https://naughty-booth-62a601.netlify.com/" />
    </Helmet>
    <Header smallHeader={smallHeader} />
    <PageContainer mobileFirst>
      <Container flexDirection="column">
        <Item>{children}</Item>
      </Container>
    </PageContainer>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  smallHeader: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default Layout
