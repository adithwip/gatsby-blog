import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import PageContainer from "./PageContainer"
import Container from "./Container"
import Item from "./Item"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({
  siteTitle,
  siteDescription,
  siteType,
  siteUrl,
  smallHeader,
  children,
}) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content={siteType || "website"} />
      <meta property="og:description" content={siteDescription} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
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
  siteType: PropTypes.string,
  siteUrl: PropTypes.string,
  smallHeader: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default Layout
