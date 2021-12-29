import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <Seo title="Cool Kids Blog" />
    <h1>Blog</h1>
    
    <ol>
      <li>Bought a domain through Route53 on Amazon Web Services (AWS) - coolkidscreations.com</li>
      <li>Created a S3 bucket and linked domain to the bucket</li>
      <li>Downloaded a Gatsby template from gatsbyjs.com on GitHub using <code>git clone</code></li>
      <li>Modified the template to coolkidscreations</li>
      <li>Setup <Link to="https://github.com/scottaculous/coolkidscreations" target="_blank">coolkidscreations repo in GitHub</Link></li>
      <li>Built the website using <code>npm run build</code></li>
      <li>Deployed the website using <code>npm run deploy</code></li>
      <li>Made a logo.  Fun fact the logo means roblox and minecraft.</li>
      <li>Uploaded our first <Link to="/product/">product</Link></li>
      <li>Uploaded our first paypal <Link to="/product/">button</Link></li>
      
    </ol>   

  </Layout>
)

export default Blog
