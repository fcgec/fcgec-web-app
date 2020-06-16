import React from 'react'
import {
    EmailShareButton, EmailIcon, WhatsappIcon, WhatsappShareButton,
    LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton
} from 'react-share'

import BackButton from './backButton'

import templateButtonsStyles from './templateButtons.module.scss'

const TemplateButtons = ({ where, slug }) => {

    let shareUrl = ` https://fcgec.netlify.app/${where}/${slug}`

    if (where === 'members')
        shareUrl = shareUrl.replace(/^/, "Check out this FCGEC member's profile!\n");
    else if (where === 'blog')
        shareUrl = shareUrl.replace(/^/, "Check out this Blog post on FOSS Community GEC!\n");
    else if (where === 'events')
        shareUrl = shareUrl.replace(/^/, "Check out this Event on FOSS Community GEC!\n");
    else if (where === 'project')
        shareUrl = shareUrl.replace(/^/, "Check out this Project on FOSS Community GEC!\n");

    return (
        <div className={templateButtonsStyles.buttons}>
            <BackButton where={where} />
            <div className={templateButtonsStyles.share}>
                <EmailShareButton url={shareUrl}>
                    <EmailIcon size={48} />
                </EmailShareButton>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={48} />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={48} />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={48} />
                </TwitterShareButton>
            </div>
        </div>
    )
};

export default TemplateButtons