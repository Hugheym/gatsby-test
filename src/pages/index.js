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
        alt="A panda hiding."
        src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/16/babypanda2_getty.jpg.rend.hgtvcom.966.644.suffix/1584396557688.jpeg"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
