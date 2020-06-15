import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import membersStyles from './members.module.scss'

import UserIcon from '../images/placeholder.inline.svg'
import GitHubIcon from '../images/github.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'
import WebsiteIcon from '../images/website.inline.svg'

const MembersPage = () => {
  const data = useStaticQuery(graphql`
    	query {
    	  allMembersJson {
    	    edges {
    	      node {
    	        id,
    	        name,
					    image,
    	      	github,
              twitter,
              website
    	    	}
    	    }   
    	  }
    	}
  `)

  console.log(data);

  return (
    <Layout>
      <SEO title="Members" />
      <section className="pageTitle">
        <h2>Members</h2>
      </section>

      <div className="container">
        <div className={membersStyles.membersGrid}>
          {data.allMembersJson.edges.map(edge => (
            <div key={edge.node.id} className={membersStyles.memberGridItem}>
              {edge.node.image ?
                <img src={edge.node.image} alt="Image" className={membersStyles.memberImage} />
                : <UserIcon className={membersStyles.svgProfile} />
              }
              <div className={membersStyles.info}>
                <h3>{edge.node.name}</h3>
                <div className={membersStyles.links}>
                  {edge.node.github ? <a href={`https://github.com/${edge.node.github}`}><GitHubIcon className={membersStyles.svgColor} /></a> : ``}
                  {edge.node.twitter ? <a href={`https://twitter.com/${edge.node.twitter}`}><TwitterIcon className={membersStyles.svgColor} /></a> : ``}
                  {edge.node.website ? <a href={edge.node.website}><WebsiteIcon className={membersStyles.svgColor} /></a> : ``}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default MembersPage
