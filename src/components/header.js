import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import headerStyles from './header.module.scss'

import HomeIcon from '../images/home.inline.svg'
import AboutIcon from '../images/about.inline.svg'
import MembersIcon from '../images/members.inline.svg'
import ProjectsIcon from '../images/projects.inline.svg'
import BlogIcon from '../images/blog.inline.svg'
import EventsIcon from '../images/events.inline.svg'

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

  const activeLinkStyles = { color: "#0069ff" };

  // Style for active link to 
  if (window.innerWidth <= 768)
    activeLinkStyles.borderTop = "0.25rem solid #0069ff"
  else
    activeLinkStyles.borderLeft = "0.25rem solid #0069ff"

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
            <HomeIcon className={headerStyles.svgColor} /> <p>Home</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/events">
            <EventsIcon className={headerStyles.svgColor} /> <p>Events</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/about">
            <AboutIcon className={headerStyles.svgColor} /> <p>About</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/members">
            <MembersIcon className={headerStyles.svgColor} /> <p>Members</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/projects">
            <ProjectsIcon className={headerStyles.svgColor} /> <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/blog">
            <BlogIcon className={headerStyles.svgColor} /> <p>Blog</p>
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
