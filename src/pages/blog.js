import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <Seo title="Cool Kids Blog" />
    <h1>Blog</h1>
    <p>Come back later for our blog</p>
    <ol>
      <li>Bought a domain through Amazon Web Services (AWS) - coolkidscreations</li>
      <li>Linked domain to a S3 bucket</li>
      <li>Dwonloaded a Gatsby template from gatsbyjs.com on GitHub using git clone</li>
      <li>Modified the template to coolkidscreations</li>
      <li>Setup coolkidscreations repo in GitHub</li>
    </ol>

  </Layout>
)

export default Blog
