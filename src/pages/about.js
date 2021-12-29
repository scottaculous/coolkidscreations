import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>Hi</h1>
    <p>We are a group of kids that make cool stuff.  We founded in August 2021.  I hope you like our site.</p>
    <p>Thanks, 
       gamer &amp; cool
    </p>
    <StaticImage
      src="../images/cool_gamer.jpg"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Two cool kids"
      style={{ marginBottom: `1.45rem` }}
    />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
