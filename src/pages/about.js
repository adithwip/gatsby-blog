import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import SectionContainer from "../layouts/SectionContainer"

export const query = graphql`
  query {
    headerArt: file(relativePath: { eq: "absurd-design-glasses.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    contentfulAboutPageContents {
      paragraphOne {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout
    noPageContainer
    absoluteTop
    siteTitle="About Page"
    siteDescription="Will provide my readers about myself"
  >
    <SectionContainer mobileFirst noPadding>
      <Img fluid={data.headerArt.childImageSharp.fluid} />
    </SectionContainer>
    <SectionContainer mobileFirst>
      <h1>Hi, I'm Adith!</h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulAboutPageContents.paragraphOne.childMarkdownRemark
              .html,
        }}
      />
      <ul>
        <li>
          <a
            href="https://twitter.com/adith_wp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adith-widya-pradipta-3a777894/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <Link to="/blog">Or see my blog posts</Link>
        </li>
      </ul>
    </SectionContainer>
  </Layout>
)

export default AboutPage
