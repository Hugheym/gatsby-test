import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const AboutPage = ({location}) => {
    console.log(location)
    return (
        <Layout pageTitle="About" location={location}>
            <p>
                This is the about page.
            </p>
        </Layout>
    )
}

export default AboutPage