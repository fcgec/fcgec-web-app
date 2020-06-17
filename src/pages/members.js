import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBox from "../components/searchBox"
import MemberCard from "../components/members/memberCard"


import membersStyles from './members.module.scss'

const MembersPage = () => {
  const data = useStaticQuery(graphql`
    	query {
    	  allMembersJson(sort: {fields: [name], order: ASC}) {
    	    edges {
    	      node {
    	        id,
    	        name,
					    image,
    	      	github,
              twitter,
              website,
              linkedin
    	    	}
    	    }   
    	  }
    	}
  `)

  const [members,] = useState(data.allMembersJson.edges);
  const [name, setName] = useState('');
  const [search, setSearch] = useState([]);

  // Function to handle search, might not be the most efficient
  // But it gets the job done for now
  const handleChange = event => {
    // Update value of name
    setName(event.target.value);
    // Reset search
    setSearch([]);

    // If no search term then, show all
    if (event.target.value.length === 0) {
      setSearch([]);
    } else {
      // If search term then
      members.forEach(member => {
        // Check if name matches members' name
        if (new RegExp(name, 'gi').test(member.node.name)) {
          // if matched, add to search array
          setSearch(prevArray => [...prevArray, member]);
        }
      })
    }
  }

  const reset = () => {
    // Rest Input if not empty
    if (name !== '')
      setName('');
    // Reset searched members only if not empty
    if (search.length !== 0)
      setSearch([]);
  }

  return (
    <Layout>
      <SEO title="Members"
        description="The members of FOSS Community GEC. Find their information here. 
        FCGEC Members include current students and alumni of the college."
      />
      <section className="pageTitle">
        <h2>Members</h2>
      </section>

      <div className="container">
        <SearchBox name={name} handleChange={handleChange} reset={reset} />

        <div className={membersStyles.membersGrid}>
          {name === '' ? members.map(member => (
            <MemberCard key={member.node.id} {...member.node} />
          )) : search.length !== 0 ? search.map(member => (
            <MemberCard key={member.node.id} {...member.node} />
          )) : <h3>Couldn't find member: "{name}"</h3>}
        </div>
      </div>
    </Layout>
  )
}

export default MembersPage
