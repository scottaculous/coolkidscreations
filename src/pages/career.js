import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Career = () => (
  <Layout>
    <Seo title="Career" />
    <h1>Careers</h1>

    please contat me at careers@coolkidscreations.com (Thank you)

    <p>
      <ul>
      <li>Chief People Officer (CPO)</li>
      <li> Customer Service Manager </li>
      <li> Content creators
          <ul>
            <li> Film maker </li>
            <li> 3D artist </li>
            <li> Digital artist </li>
          </ul>
      </li>
      <li> Director of Human Resources </li>
      <li> Customer Service Associate </li>
      </ul>
    </p>
     
     <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Career