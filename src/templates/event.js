import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TemplateButtons from '../components/buttons/templateButtons'

import eventStyles from './event.module.scss'

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
            html
            timeToRead
        }
    }
`

const Blog = props => {

    const { markdownRemark } = props.data;
    const { html, timeToRead,
        frontmatter: { title, date, author },
        fields: { slug } } = markdownRemark;

    return (
        <Layout>
            <SEO title={title} />
            <div className="container">
                <div className={eventStyles.container}>
                    <div className={eventStyles.header}>
                        <h2>{title}</h2>
                        <p>By {author}</p>
                        <p>{timeToRead} min read · {date}</p>
                    </div>

                    <div className="container">
                        <div className={eventStyles.content} dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>
                </div>
                <TemplateButtons where="events" slug={slug} />
            </div>
        </Layout>
    )
}

export default Blog