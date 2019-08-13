import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import PostExcerpt from "../components/PostExcerpt"

const IndexPage = ({ data }) => {
  const totalCount = data.allContentfulBlogPost.totalCount
  return (
    <Layout
      siteTitle="Blog Page"
      siteDescription="Homepage of Adith Widya Pradipta's blog"
    >
      <Container flexDirection="column">
        <Item>
          <h4>
            {totalCount} {totalCount > 0 ? "Posts" : "Post"}
          </h4>
        </Item>
        <Item>
          <Container flexDirection="column" spacing={8}>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <Item key={node.id}>
                <PostExcerpt data={node} />
              </Item>
            ))}
          </Container>
        </Item>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "DD MMMM, YYYY")
        }
      }
      totalCount
    }
  }
`

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//       totalCount
//     }
//   }
// `
