import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout
      smallHeader
      siteTitle={post.frontmatter.title}
      siteDescription={post.excerpt}
    >
      <Container flexDirection="column">
        <Item>
          <h1>{post.frontmatter.title}</h1>
        </Item>
        <Item>
          <p style={{ color: "#1CA086" }}>{post.frontmatter.date}</p>
        </Item>
        <Item>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Item>
      </Container>
    </Layout>
  )
}

export default Post
