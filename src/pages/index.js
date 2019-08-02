import React from "react"
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Container from '../layouts/Container'
import Item from '../layouts/Item'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const totalCount = data.allMarkdownRemark.totalCount
  return (
    <Layout>
      <Container flexDirection="column">
        <Item>
          <h4>{totalCount} {totalCount > 0 ? 'Posts' : 'Post'}</h4>
        </Item>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item key={node.id}>
            <Container flexDirection="column">
              <Item>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </Item>
            </Container>
          </Item>
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
