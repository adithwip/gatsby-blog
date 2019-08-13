import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

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

        return <Img fluid={image.node.fluid} />
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
        <Item>{documentToReactComponents(post.body.json, options)}</Item>
      </Container>
    </Layout>
  )
}

export default Post
