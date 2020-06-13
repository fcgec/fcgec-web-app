import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import headerStyles from './header.module.scss'

const Header = ({ siteTitle, location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "FCGEC.png" }) {
        childImageSharp {
          fluid(maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const activeLinkStyles = { color: "#32e0c4", paddingLeft: "0.75rem", borderLeft: "0.25rem solid #32e0c4" };

  return (
    <header className={headerStyles.header}>
      <div>
        <h1>
          <Link to="/">
            <Img fluid={data.file.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="Logo" />
            <p>
              {/* {siteTitle} */}
              FC GEC
            </p>
          </Link>
        </h1>
      </div>
      <ul>
        <li><Link activeStyle={activeLinkStyles} to="/">Home</Link></li>
        <li><Link activeStyle={activeLinkStyles} to="/events">Events</Link></li>
        <li><Link activeStyle={activeLinkStyles} to="/about">About</Link></li>
        <li><Link activeStyle={activeLinkStyles} to="/members">Members</Link></li>
        <li><Link activeStyle={activeLinkStyles} to="/projects">Projects</Link></li>
        <li><Link activeStyle={activeLinkStyles} to="/blog">Blog</Link></li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `FOSS Community GEC`,
}

export default Header
