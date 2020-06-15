import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MemberCard from "../components/members/memberCard"

import membersStyles from './members.module.scss'

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

  return (
    <Layout>
      <SEO title="Members" />
      <section className="pageTitle">
        <h2>Members</h2>
      </section>

      <div className="container">
        <div className={membersStyles.membersGrid}>
          {data.allMembersJson.edges.map(edge => (
            <MemberCard key={edge.node.id} {...edge.node} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default MembersPage
