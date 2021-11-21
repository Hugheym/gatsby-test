import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Hello Gatsby!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
