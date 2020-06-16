import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from '../components/projects/projectCard'

import projectsStyles from './projects.module.scss'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
    	query {
    	    allProjectsJson(
                sort: {fields: [name], order: ASC}
                ) {
    	        edges {
    	            node {
    	                id,
                        name,
                        description,
                        image,
                        fields {
                            slug
                        }
    	            }
    	        }   
    	    }
    	}
  `)

    return (
        <Layout>
            <SEO title="Projects"
                description="Projects built by members of FOSS Community GEC."
            />
            <section className="pageTitle">
                <h2>Projects</h2>
            </section>

            <div className="container">
                <div className={projectsStyles.projectsGrid}>
                    {data.allProjectsJson.edges.length ? data.allProjectsJson.edges.map(edge => (
                        <ProjectCard {...edge.node} {...edge.node.fields} key={edge.node.id} />
                    ))
                        : <h3>No projects found, that's embarrassing...</h3>}
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage