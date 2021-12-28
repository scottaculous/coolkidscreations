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
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="JQNPGTRMQFMWA" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>

    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product
