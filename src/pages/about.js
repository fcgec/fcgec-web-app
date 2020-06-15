import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <div>
        <SEO title="About"
            description="Find out more about FOSS Community GEC."
        />
        <section className="pageTitle">
            <h2>About the club</h2>
        </section>

        <div className="container">
            <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community in Goa College of Engineering and encourage students across Goa to contribute to open source software projects and adopt the FOSS philosophy.</p>
        </div>

    </div>
)

export default AboutPage
