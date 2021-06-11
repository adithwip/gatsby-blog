import React from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import FeaturedImage from "../components/FeaturedImage"
import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

const fixId = (id) => {
  if (id.length === 23 && id.startsWith("c")) {
    return id.slice(1)
  }
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
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
      "embedded-asset-block": (node) => {
        const imageId = node.data.target.sys.id
        const image = data.allContentfulAsset.edges.find(
          (edge) => edge.node.contentful_id === fixId(imageId)
        )

        return <FeaturedImage fluid={image.node.fluid} />
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
      <Container flexDirection="column" spacing={16}>
        <Item>
          <h1>{post.title}</h1>
        </Item>
        <Item>
          <p>{post.publishedDate}</p>
        </Item>
        <Item>
          <FeaturedImage fluid={post.featuredImage.fluid} />
        </Item>
        <Item>
          <div
            dangerouslySetInnerHTML={{
              __html: post.bodyText.childMarkdownRemark.html,
            }}
          />
        </Item>
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
