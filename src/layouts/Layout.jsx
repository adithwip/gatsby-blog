import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import SectionContainer from "./SectionContainer"
import Container from "./Container"
import Item from "./Item"

import AbsoluteTop from "./AbsoluteTop"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({
  absoluteTop,
  siteTitle,
  siteDescription,
  siteType,
  siteUrl,
  siteImage,
  noPageContainer,
  children,
}) => {
  const bodyAndFooterElements = (
    <>
      {!noPageContainer ? (
        <SectionContainer mobileFirst>
          <Container flexDirection="column">
            <Item>{children}</Item>
          </Container>
        </SectionContainer>
      ) : (
        children
      )}
      <Footer />
    </>
  )
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content={siteType || "website"} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Blog image" />
        {siteUrl && <meta property="og:url" content={siteUrl} />}
        <meta name="Description" content={siteDescription} />
        <title>{`${siteTitle} | Adith Widya Pradipta`}</title>
        <link rel="canonical" href="https://adithwp.netlify.app" />
      </Helmet>
      <Header />
      {absoluteTop ? (
        <AbsoluteTop>{bodyAndFooterElements}</AbsoluteTop>
      ) : (
        bodyAndFooterElements
      )}
    </React.Fragment>
  )
}

Layout.propTypes = {
  absoluteTop: PropTypes.bool,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  siteType: PropTypes.string,
  siteImage: PropTypes.string,
  siteUrl: PropTypes.string,
  children: PropTypes.element.isRequired,
  noPageContainer: PropTypes.bool,
}

Layout.defaultProps = {
  noPageContainer: false,
  absoluteTop: false,
}

export default Layout
