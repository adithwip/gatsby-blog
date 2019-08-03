import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import PostExcerpt from "../components/PostExcerpt"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`

const IndexPage = ({ data }) => {
  const totalCount = data.allMarkdownRemark.totalCount
  return (
    <Layout siteTitle="Blog Page">
      <Container flexDirection="column">
        <Item>
          <h4>
            {totalCount} {totalCount > 0 ? "Posts" : "Post"}
          </h4>
        </Item>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item key={node.id}>
            <PostExcerpt data={node} />
          </Item>
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
