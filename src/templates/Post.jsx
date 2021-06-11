import React from "react"
import { graphql } from "gatsby"

import FeaturedImage from "../components/FeaturedImage"
import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      featuredImage {
        gatsbyImageData
      }
      bodyText {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          contentful_id
          gatsbyImageData
        }
      }
    }
  }
`

const Post = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const url = location.href

  return (
    <Layout
      siteTitle={post.title}
      siteType="article"
      siteUrl={url}
      siteDescription="Site description soon from contentful"
    >
      <Container flexDirection="column" spacing={16}>
        <Item>
          <h1>{post.title}</h1>
        </Item>
        <Item>
          <p>{post.publishedDate}</p>
        </Item>
        <Item>
          <FeaturedImage image={post.featuredImage.gatsbyImageData} />
        </Item>
        <Item>
          <div
            dangerouslySetInnerHTML={{
              __html: post.bodyText.childMarkdownRemark.html,
            }}
          />
        </Item>
      </Container>
    </Layout>
  )
}

export default Post