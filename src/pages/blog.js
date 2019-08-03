import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"

const BlogPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Adith Widya Pradipta - Blog Dummy Page</title>
      <link rel="canonical" href="http://localhost:9000/" />
    </Helmet>
    <h1>This is Blog Pag</h1>
    <h3>I will write a lot of things here</h3>
  </Layout>
)

export default BlogPage
