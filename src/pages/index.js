import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

import indexStyles from './index.module.scss'

import WhoWeAre from '../images/WhoWeAre.inline.svg'
import WhatWeDo from '../images/WhatWeDo.inline.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home"
        meta={[{ name: "google-site-verification", content: "phnLHAMpXE4CDnqbdrZyzM0X17TExa8fAsClH3kY7Fc" }]}
      />

      <BackgroundImage
        Tag="section"
        className={indexStyles.header}
        fluid={data.file.childImageSharp.fluid}
      // backgroundColor={`#131314`}
      // This backgroundColor is for overlay
      >
        <h1>FOSS CLUB GEC</h1>
      </BackgroundImage>


      <section className={indexStyles.imageWithText}>
        <div className={indexStyles.image}>
          <WhoWeAre />
        </div>
        <div className={indexStyles.text}>
          <h2>Who we are</h2>
          <p>We're a bunch of people who love free and open source software. We created this Club to connect with other FOSS enthusiasts both in our college and beyond. Everyone is welcome at our events from 1st year college students to working professionals.</p>
        </div>
      </section>

      <section className={indexStyles.imageWithText}>
        <div className={indexStyles.text}>
          <h2>What we do</h2>
          <p>We strive to nurture the open source Club in our college and encourage students across Goa to contribute to open source software projects and adopt the FOSS.</p>
          <p>We also regularly organise workshops and talks on various Open source technologies and projects. So keep an eye on our Events page to for upcoming programs.</p>
        </div>
        <div className={indexStyles.image}>
          <WhatWeDo />
        </div>
      </section>
    </Layout >
  )
}

export default IndexPage
