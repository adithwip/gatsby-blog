import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"

export const query = graphql`
  {
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
    siteTitle="About Page"
    siteDescription="Will provide my readers about myself"
  >
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
    </ul>
  </Layout>
)

export default AboutPage
