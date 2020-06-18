import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBox from "../components/searchBox"
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

    const [projects,] = useState(data.allProjectsJson.edges);
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
            projects.forEach(project => {
                // Check if name matches members' name
                if (new RegExp(name, 'gi').test(project.node.name)) {
                    // if matched, add to search array
                    setSearch(prevArray => [...prevArray, project]);
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
            <SEO title="Projects"
                description="View the projects built by members of FOSS Club GEC. Click to find out more."
            />
            <section className="pageTitle">
                <h2>Projects</h2>
            </section>

            <div className="container">
                <SearchBox
                    name={name}
                    handleChange={handleChange}
                    reset={reset}
                    what="Projects"
                />

                <div className={projectsStyles.projectsGrid}>
                    {name === '' ? projects.map(project => (
                        <ProjectCard
                            {...project.node}
                            {...project.node.fields}
                            key={project.node.id}
                        />
                    )) : search.length !== 0 ? search.map(project => (
                        <ProjectCard
                            {...project.node}
                            {...project.node.fields}
                            key={project.node.id}
                        />
                    ))
                            : <h3>Couldn't find project: "{name}"</h3>}
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage