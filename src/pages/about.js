import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
  <React.Fragment>
    <h1>Hi, I'm Adith</h1>
    <p>You can contact me at:</p>
    <ul>
      <li><a href="https://twitter.com/adith_wp" target="_blank">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/adith-widya-pradipta-3a777894/" target="_blank">linkedin</a></li>
      <li><Link to="/blog">Or see my blog posts</Link></li>
    </ul>
  </React.Fragment>
)

export default AboutPage