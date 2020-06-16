import React from 'react'
import { Link } from 'gatsby'

import memberCardStyles from './memberCard.module.scss'

import UserIcon from '../../images/placeholder.inline.svg'
import GitHubIcon from '../../images/github.inline.svg'
import TwitterIcon from '../../images/twitter.inline.svg'
import WebsiteIcon from '../../images/website.inline.svg'
import LinkedInIcon from '../../images/linkedin.inline.svg'

const MemberCard = ({ name, image, github, twitter, website, linkedin }) => {
    return (
        <div>
            <Link to={`/@${github}`} className={memberCardStyles.memberCard}>
                {image ?
                    <img src={image} alt={name} className={memberCardStyles.memberImage} />
                    : <UserIcon className={memberCardStyles.svgProfile} />
                }

                <div className={memberCardStyles.info}>
                    <h3>{name}</h3>

                    <div className={memberCardStyles.links}>
                        {github ? <span>
                            <GitHubIcon className={memberCardStyles.svgColor} /></span> : ``}

                        {twitter ? <span>
                            <TwitterIcon className={memberCardStyles.svgColor} /></span> : ``}

                        {linkedin ? <span>
                            <LinkedInIcon className={memberCardStyles.svgColor} /></span> : ``}

                        {website ? <span>
                            <WebsiteIcon className={memberCardStyles.svgColor} /></span> : ``}
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default MemberCard