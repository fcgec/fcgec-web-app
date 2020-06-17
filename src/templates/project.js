import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TemplateButtons from '../components/buttons/templateButtons'
import MemberCard from '../components/members/memberCard'

import projectStyles from './project.module.scss'

// import GitHubIcon from '../images/github.inline.svg'
// import TwitterIcon from '../images/twitter.inline.svg'
// import WebsiteIcon from '../images/website.inline.svg'
// import UserIcon from '../images/placeholder.inline.svg'
// import LinkedInIcon from '../images/linkedin.inline.svg'

export const query = graphql`
    query( $members: [String], $slug: String ) {
        projectsJson (fields: {slug: {eq: $slug}}) {
            name,
            description,
            image,
            repo,
            tags,
            fields {
                slug
            }
        }
	    allMembersJson(filter: {github: {in: $members}}) {
            nodes {
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
`



const Project = ({ data, pageContext }) => {
    const { projectsJson: { name, description, image,
        repo, tags, fields: { slug } } } = data;

    return (
        <Layout>
            <SEO title={`${name} Project`}
                description={`View the ${name} project made by members of FOSS Community GEC. Find their links and information here.`}
            />
            <div className="container">
                <div className={projectStyles.projectContainer}>
                    <div className={projectStyles.project}>
                        <div className={projectStyles.info}>
                            <div>
                                <img src={image} alt={name} />
                            </div>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>

                                <a href={repo}>Code Repo</a>

                                <ul>
                                    {tags.map(tag => <li key={tag}>{`#${tag}`}</li>)}
                                </ul>
                            </div>
                        </div>

                        <h3>Project Team Members</h3>

                        <div className={projectStyles.membersGrid}>
                            {data.allMembersJson.nodes.map(node =>
                                <MemberCard key={node.id} {...node} />)}
                        </div>

                    </div>
                    <TemplateButtons where="projects" slug={slug} />
                </div>
            </div>
        </Layout>
    )
}

export default Project

