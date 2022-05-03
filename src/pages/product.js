import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = () => (
  <Layout>
    <Seo title="Products" />
    <h1>Products</h1>
    
    <h3>Picture of Cool Kids Creator - $5.99 </h3>
    <StaticImage
      src="../images/product-1.jpg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Product 1"
      style={{ marginBottom: `1.45rem` }}
    />    
    <table border="0">
      <tr>
        <td width="100">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="JQNPGTRMQFMWA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </td>
        <td align="left" valign="top">
        or  <Link to="/payment/">Pay with bitcoin</Link>
        </td>
      </tr>
    </table>
      
    <h3>CKC Daily News - $7.99</h3>
    <StaticImage
      src="../images/product-2-a.jpeg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Picture 2"
      style={{ marginBottom: `1.45rem` }}
    /> 
     <table border="0">
      <tr>
        <td width="100">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="LKX7HAB8TC5BJ" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </td>
        <td align="left" valign="top">
        or  <Link to="/payment/">Pay with bitcoin</Link>
        </td>
      </tr>
    </table>

    <h3>Xmas Time - SOLD OUT</h3>
    <StaticImage
      src="../images/product-3.jpeg"
      width={500}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Product 3"
      style={{ marginBottom: `1.45rem` }}
    />

    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product
