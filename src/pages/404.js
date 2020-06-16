import React from "react"
import { Link } from 'gatsby'

// import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found"
      description="Page not found"
    />
    <div className="container">
      <h1>404! You probably know what this means, don't you?</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link cover direction="up" bg="#131314" duration={0.5} to="/">
        Take me home!
    </Link>
    </div>
  </div>
)

export default NotFoundPage