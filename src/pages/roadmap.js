import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap" />
    <h1>Roadmap</h1>
    <p>This is our site's feature roadmap.</p>
    <ol>
      <li>Add a Paypal button - DONE!</li>
      <li>Add a buy with crypto option</li>
      <li>Add a product detail page</li>
      <li>Easier way to upload products</li>
      <li>Add way to upload video content</li>
      <li>Picture with different cool kids in it on About Us</li>
    </ol>   

  </Layout>
)

export default Roadmap
