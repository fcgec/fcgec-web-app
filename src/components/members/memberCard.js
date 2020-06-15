import React from 'react'
// import { Link } from 'gatsby'
import Link from 'gatsby-plugin-transition-link/AniLink'

import memberCardStyles from './memberCard.module.scss'

import UserIcon from '../../images/placeholder.inline.svg'
import GitHubIcon from '../../images/github.inline.svg'
import TwitterIcon from '../../images/twitter.inline.svg'
import WebsiteIcon from '../../images/website.inline.svg'
import LinkedInIcon from '../../images/linkedin.inline.svg'

const MemberCard = ({ name, image, github, twitter, website, linkedin }) => {
    return (
        <div >
            <Link cover direction="right" bg="#0069FF" duration={0.6} to={`/@${github}`} className={memberCardStyles.memberCard}>
                {image ?
                    <img src={image} alt={name} className={memberCardStyles.memberImage} />
                    : <UserIcon className={memberCardStyles.svgProfile} />
                }

                <div className={memberCardStyles.info}>
                    <h3>{name}</h3>

                    <div className={memberCardStyles.links}>
                        {github ? <a href={`https://github.com/${github}`}
                            aria-label={`Link to ${name}'s GitHub Profile`}>
                            <GitHubIcon className={memberCardStyles.svgColor} /></a> : ``}

                        {twitter ? <a href={`https://twitter.com/${twitter}`}
                            aria-label={`Link to ${name}'s Twitter Profile`}>
                            <TwitterIcon className={memberCardStyles.svgColor} /></a> : ``}

                        {linkedin ? <a href={`https://linkedin.com/in/${linkedin}`}
                            aria-label={`Link to ${name}'s LinkedIn Profile`}>
                            <LinkedInIcon className={memberCardStyles.svgColor} /></a> : ``}

                        {website ? <a href={website}
                            aria-label={`Link to ${name}'s Website`}>
                            <WebsiteIcon className={memberCardStyles.svgColor} /></a> : ``}
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default MemberCard