import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledImage = styled(Img)`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const fixId = id => {
  if (id.length === 23 && id.startsWith("c")) {
    return id.slice(1)
  }
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
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
          fluid {
            # Use fragments: https://www.gatsbyjs.org/packages/gatsby-image/
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Post = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const url = location.href
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const imageId = node.data.target.sys.id
        const image = data.allContentfulAsset.edges.find(
          edge => edge.node.contentful_id === fixId(imageId)
        )

        return <StyledImage fluid={image.node.fluid} />
      },
    },
  }

  return (
    <Layout
      siteTitle={post.title}
      siteType="article"
      siteUrl={url}
      siteDescription="Site description soon from contentful"
    >
      <Container flexDirection="column">
        <Item>
          <h1>{post.title}</h1>
        </Item>
        <Item>
          <p style={{ color: "#1CA086" }}>{post.publishedDate}</p>
        </Item>
        <div
          dangerouslySetInnerHTML={{
            __html: post.bodyText.childMarkdownRemark.html,
          }}
        />
        {/* <Item>{documentToReactComponents(post.body.json, options)}</Item> */}
      </Container>
    </Layout>
  )
}

export default Post

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       frontmatter {
//         title
//         date(formatString: "DD MMMM, YYYY")
//       }
//     }
//     site {
//       siteMetadata {
//         image
//       }
//     }
//   }
// `
