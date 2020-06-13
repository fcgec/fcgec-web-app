import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from './index.module.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      whoWeAre: file(relativePath: { eq: "who_we_are.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whatWeDo: file(relativePath: { eq: "what_we_do.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <section className={indexStyles.header}>
        <h1>FOSS Community GEC</h1>
        <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community.</p>
      </section>

      <section className={indexStyles.imageWithText}>
        <Img fluid={data.whoWeAre.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Who we are" />
        <div className={indexStyles.text}>
          <h2>Who we are</h2>
          <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community in Goa College of Engineering and encourage students across Goa to contribute to open source software projects and adopt the FOSS philosophy.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quibusdam consectetur earum nobis vitae odit maiores repellat. Aliquam autem veritatis reiciendis aspernatur fuga repellat? Assumenda, maxime. Pariatur modi saepe blanditiis!</p>
        </div>
      </section>

      <section className={indexStyles.imageWithText}>
        <div className={indexStyles.text}>
          <h2>What we do</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi nulla commodi autem sit aliquam, rem ducimus dolor cumque quas voluptatem, beatae nihil corporis deleniti facilis harum nisi voluptatum quidem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem veritatis assumenda culpa quaerat perspiciatis neque pariatur ea exercitationem ipsam, tenetur reiciendis enim voluptate debitis deserunt voluptatibus aliquid aperiam quasi.</p>
        </div>
        <Img fluid={data.whatWeDo.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="What we do" />
      </section>

    </Layout>
  )
}

export default IndexPage
