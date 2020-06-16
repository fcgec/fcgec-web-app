import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from './about.module.scss'



const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "GEC.png" }) {
        childImageSharp {
          fixed(width: 290) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About"
        description="Find out more about FOSS Community GEC."
      />
      <section className="pageTitle">
        <h2>About the club</h2>
      </section>

      <div className="container">
        <section className={aboutStyles.imageWithText}>
          <div className={aboutStyles.image}>
            <Img fixed={data.file.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
              alt="Logo" />
          </div>
          <div className={aboutStyles.text}>
            <h2>Our Story</h2>
            <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community in Goa College of Engineering and encourage students across Goa to contribute to open source software projects and adopt the FOSS philosophy.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quibusdam consectetur earum nobis vitae odit maiores repellat. Aliquam autem veritatis reiciendis aspernatur fuga repellat? Assumenda, maxime. Pariatur modi saepe blanditiis!</p>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default AboutPage
