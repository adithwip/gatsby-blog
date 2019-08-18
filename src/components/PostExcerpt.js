import React from "react"
import { Link } from "gatsby"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const PostExcerpt = props => (
  <Container flexDirection="column">
    <Item>
      <Link to={`/${props.data.slug}`}>
        <h3>{props.data.title}</h3>
      </Link>
      <p>{props.data.publishedDate}</p>
      <p>{props.data.excerpt}</p>
    </Item>
  </Container>
)

export default PostExcerpt
