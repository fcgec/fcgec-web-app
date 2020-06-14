import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BlogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            author
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog" />

            <section className="pageTitle">
                <h2>Blog</h2>
            </section>

            <div className="container">
                <ol>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.date}</p>
                                <p>- {edge.node.frontmatter.author}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}

export default BlogPage
