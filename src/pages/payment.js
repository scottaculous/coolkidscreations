import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Payment = () => (
  <Layout>
    <Seo title="Payment" />
    <h1>Payment</h1>
    
    <p>
      note: open your <Link to="https://www.coinomi.com/">coinomi app</Link> to do it.
    </p>

    <h3>Bitcoin</h3>
    Address: bc1qlk3nf8zqp988ffx0n2m4pklfcaeu5wjyrmfjh3 <br />
    <StaticImage
      src="../images/bitcoin-wallet.jpeg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="BTC address"
      style={{ marginBottom: `1.45rem` }}
    />    
    
    <h3>Ethereum</h3>
    Address: 0x919A11Ec5Ea0F2661F273E8b3Cc687DA92614Ba9<br />
    <StaticImage
      src="../images/ethereum-wallet.jpeg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="ETH address"
      style={{ marginBottom: `1.45rem` }}
    /> 
     
     <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Payment