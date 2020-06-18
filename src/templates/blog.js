import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TemplateButtons from '../components/buttons/templateButtons'

import blogStyles from './blog.module.scss'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields:{slug:{eq: $slug}}) {
            frontmatter {
                title
                date
                author
            }
            fields {
                slug
            }
            excerpt
            html
            timeToRead
        }
    }
`

const Blog = props => {
    const { markdownRemark } = props.data;
    const { html, timeToRead, excerpt,
        frontmatter: { title, date, author },
        fields: { slug } } = markdownRemark;

    return (
        <Layout>
            <SEO title={title}
                description={`Blog post by ${author} | ` + excerpt}
            />
            <div className="container">
                <div className={blogStyles.container}>
                    <div className={blogStyles.header}>
                        <h2>{title}</h2>
                        <p>By {author}</p>
                        <p>{timeToRead} min read · {date}</p>
                    </div>

                    <div className="container">
                        <div className={blogStyles.content} dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>
                    <TemplateButtons where="blog" slug={slug} />
                </div>
            </div>
        </Layout>
    )
}

export default Blog