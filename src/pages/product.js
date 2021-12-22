import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = () => (
  <Layout>
    <Seo title="Cool Kids Products" />
    <h1>Products</h1>
    
    <code>
    <StaticImage
      src="../images/drawing.1.jpg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Product 1fffffffffffffffffffff"
      style={{ marginBottom: `1.45rem` }}
    /> <br />
    Picture of Cool Kids Creator - $5.99 <br />
    </code>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product
