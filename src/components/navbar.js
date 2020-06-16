import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useMedia } from 'react-media';

import navbarStyles from './navbar.module.scss'

// Icons for Navigation
import HomeIcon from '../images/home.inline.svg'
import AboutIcon from '../images/about.inline.svg'
import MembersIcon from '../images/members.inline.svg'
import ProjectsIcon from '../images/projects.inline.svg'
import BlogIcon from '../images/blog.inline.svg'
import EventsIcon from '../images/events.inline.svg'

const Navbar = ({ siteTitle, location }) => {
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

  // For changing the style of the Navbar
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 768px)",
    large: "(min-width: 769px)"
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const activeLinkStyles = { color: "#0069ff", background: "#131314" };

  if (matches.small)
    activeLinkStyles.borderTop = "0.25rem solid #0069ff";
  else
    activeLinkStyles.borderLeft = "0.25rem solid #0069ff";

  return (
    <header className={navbarStyles.header}>
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
            <HomeIcon className={navbarStyles.svgColor} /> <p>Home</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/events">
            <EventsIcon className={navbarStyles.svgColor} /> <p>Events</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/about">
            <AboutIcon className={navbarStyles.svgColor} /> <p>About</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/members">
            <MembersIcon className={navbarStyles.svgColor} /> <p>Members</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/projects">
            <ProjectsIcon className={navbarStyles.svgColor} /> <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/blog">
            <BlogIcon className={navbarStyles.svgColor} /> <p>Blog</p>
          </Link>
        </li>
      </ul>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: `FOSS Community GEC`,
}

export default Navbar
