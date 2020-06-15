import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import memberStyles from './member.module.scss'

import GitHubIcon from '../images/github.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'
import WebsiteIcon from '../images/website.inline.svg'
import UserIcon from '../images/placeholder.inline.svg'

export const query = graphql`
    query ($github: String!) {
        membersJson (github:{eq: $github}) {
            name,
            image,
            github,
            twitter,
            website
        }
    }
`

const Member = props => {
    const { membersJson: { name, image, github, twitter, website }
    } = props.data;


    return (
        <Layout>
            <SEO title="Member Page"
                description={`View ${name}'s profile at FOSS Community GEC. Find their links and information here.`}
            />
            <div className="container">
                <div className={memberStyles.member}>
                    {
                        image ?
                            <img src={image} alt={name} />
                            : <UserIcon className={memberStyles.svgProfile} />
                    }
                    <div className={memberStyles.info}>
                        <h2>{name}</h2>
                        <div className={memberStyles.links}>
                            {github ? <a href={`https://github.com/${github}`}
                                aria-label={`Link to ${name}'s GitHub Profile`}>
                                <GitHubIcon className={memberStyles.svgColor} />
                                <p>GitHub</p>
                            </a> : ``}

                            {twitter ? <a href={`https://twitter.com/${twitter}`}
                                aria-label={`Link to ${name}'s Twitter Profile`}>
                                <TwitterIcon className={memberStyles.svgColor} />
                                <p> Twitter</p>
                            </a> : ``}

                            {website ? <a href={website}
                                aria-label={`Link to ${name}'s Website`}>
                                <WebsiteIcon className={memberStyles.svgColor} />
                                <p> Website</p>
                            </a> : ``}
                        </div>
                    </div>
                    <Link className={memberStyles.backButton} to="/members">Go Back</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Member

