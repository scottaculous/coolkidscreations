import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi everybody</h1>
    <p>Welcome to Cool Kids Creations.</p>
    <p>Look around and find something cool.</p>
    <StaticImage
      src="../images/cool-kids-playing.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/about/">Go to About Us</Link> <br />
      <Link to="/product/">Go to Products</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
