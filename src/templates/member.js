import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TemplateButtons from '../components/buttons/templateButtons'

import memberStyles from './member.module.scss'

import GitHubIcon from '../images/github.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'
import WebsiteIcon from '../images/website.inline.svg'
import UserIcon from '../images/placeholder.inline.svg'
import LinkedInIcon from '../images/linkedin.inline.svg'

export const query = graphql`
    query ($github: String!) {
        membersJson (github:{eq: $github}) {
            name,
            image,
            github,
            twitter,
            website,
            linkedin
        }
    }
`

// To check if website begins with https protocol else prepend it
const checkWebsite = text => (text.startsWith("https://") ? text : `https://${text}`);

const Member = props => {
    const { membersJson: { name, image, github, twitter, website, linkedin }
    } = props.data;

    const websiteToRender = checkWebsite(website);

    return (
        <Layout>
            <SEO title={name}
                description={`View ${name}'s profile at FOSS Club GEC. Find their links and information here.`}
            />
            <div className="container">
                <div className={memberStyles.memberContainer}>
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

                                {linkedin ? <a href={`https://linkedin.com/in/${linkedin}`}
                                    aria-label={`Link to ${name}'s LinkedIn Profile`}>
                                    <LinkedInIcon className={memberStyles.svgColor} />
                                    <p> LinkedIn</p>
                                </a> : ``}

                                {website ? <a href={websiteToRender}
                                    aria-label={`Link to ${name}'s Website`}>
                                    <WebsiteIcon className={memberStyles.svgColor} />
                                    <p> Website</p>
                                </a> : ``}
                            </div>
                        </div>
                    </div>
                    <TemplateButtons where="members" slug={`@${github}`} />
                </div>
            </div>
        </Layout>
    )
}

export default Member

