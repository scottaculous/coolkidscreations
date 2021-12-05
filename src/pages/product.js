import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = () => (
  <Layout>
    <Seo title="Cool Kids Products" />
    <h1>Products</h1>
    <p>Come back later for cool products we are selling.</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product
