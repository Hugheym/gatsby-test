import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Hello Gatsby!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
