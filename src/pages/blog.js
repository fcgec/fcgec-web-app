import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import SearchBox from "../components/searchBox"
import BlogPost from "../components/blog/blogPost"

import BlogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter:{fields:{type:{eq:"blog"}}},
                sort: {fields: [frontmatter___date], order: DESC}
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            author
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const [posts,] = useState(data.allMarkdownRemark.edges);
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
            posts.forEach(post => {
                // Check if name matches members' name
                if (new RegExp(name, 'gi').test(post.node.frontmatter.title)) {
                    // if matched, add to search array
                    setSearch(prevArray => [...prevArray, post]);
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
            <SEO title="Blog | FOSS Club GEC"
                description="View the Blog posts by members of FOSS Club GEC. 
                Click to find out more."
            />

            <section className="pageTitle">
                <h2>Blog</h2>
            </section>

            <div className="container">
                <SearchBox
                    name={name}
                    handleChange={handleChange}
                    reset={reset}
                    what="Blog Posts"
                />

                <div className={BlogStyles.postGrid}>
                    {name === '' ? posts.map(post => (
                        <BlogPost
                            key={post.node.fields.slug}
                            {...post.node}
                            {...post.node.frontmatter}
                            {...post.node.fields}

                        />
                    )) : search.length !== 0 ? search.map(post => (
                        <BlogPost
                            key={post.node.fields.slug}
                            {...post.node}
                            {...post.node.frontmatter}
                            {...post.node.fields}
                        />
                    )) : <h3>Couldn't find post: "{name}"</h3>}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage
