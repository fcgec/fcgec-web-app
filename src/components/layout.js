import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"

// Global styles
import "../styles/style.scss"

import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Navbar className={layoutStyles.header} siteTitle={data.site.siteMetadata.title} />
        <main className={layoutStyles.main}>{children}</main>

      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
