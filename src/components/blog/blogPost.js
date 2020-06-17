import React from 'react'
import { Link } from 'gatsby'

import blogPostStyles from './blogPost.module.scss'

const BlogPost = ({ frontmatter: { title, date, author },
    fields: { slug }, excerpt }) => {

    return (
        <div className={blogPostStyles.post}>
            <Link to={`/blog/${slug}`}>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>By {author}</p>
                <p>{excerpt}</p>
            </Link>
        </div>
    )
}

export default BlogPost