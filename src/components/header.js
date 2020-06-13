import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import headerStyles from './header.module.scss'

import HomeIcon from '../images/home.svg'
import AboutIcon from '../images/about.svg'
import MembersIcon from '../images/members.svg'
import ProjectsIcon from '../images/projects.svg'
import BlogIcon from '../images/blog.svg'
import EventsIcon from '../images/events.svg'

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

  const activeLinkStyles = { color: "#0069ff", borderLeft: "0.25rem solid #0069ff" };

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
        <li>
          <Link activeStyle={activeLinkStyles} to="/">
            <img src={HomeIcon} className={headerStyles.svgColor} alt="Icon" /> <p>Home</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/events">
            <img src={EventsIcon} className={headerStyles.svgColor} alt="Icon" /> <p>Events</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/about">
            <img src={AboutIcon} className={headerStyles.svgColor} alt="Icon" /> <p>About</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/members">
            <img src={MembersIcon} className={headerStyles.svgColor} alt="Icon" /> <p>Members</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/projects">
            <img src={ProjectsIcon} className={headerStyles.svgColor} alt="Icon" /> <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/blog">
            <img src={BlogIcon} className={headerStyles.svgColor} alt="Icon" /> <p>Blog</p>
          </Link>
        </li>
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
