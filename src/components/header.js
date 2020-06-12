import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "FCGEC.png" }) {
        childImageSharp {
          fluid(maxHeight: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div>
        <h1>
          <Link to="/">
            <Img fluid={data.placeholderImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="Logo" />
            <p>{siteTitle}</p>
          </Link>
        </h1>
      </div>

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
