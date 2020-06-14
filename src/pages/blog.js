import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogStyles from './blog.module.scss'

const BlogPage = () => {

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam ea vero, ullam quo hic. Ipsum facilis itaque quia fugiat, nemo maxime, atque quasi optio, eveniet neque et magnam totam.
            </p>
        </Layout>
    )
}

export default BlogPage
