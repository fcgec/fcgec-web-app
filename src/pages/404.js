import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import notFoundStyles from './404.module.scss';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404.jpg" }) {
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
      <SEO title="404: Not found"
        description="Page not found"
      />
      <BackgroundImage
        Tag="section"
        className={notFoundStyles.container}
        fluid={data.file.childImageSharp.fluid}
      // backgroundColor={`#131314`}
      // This backgroundColor is for overlay
      >
        <h2>404! You probably know what this means, don't you?</h2>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Take me home!</Link>
      </BackgroundImage>
    </Layout >
  )
}

export default NotFoundPage