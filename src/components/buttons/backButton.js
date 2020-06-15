import React from 'react'
// import { Link } from 'gatsby'
import Link from 'gatsby-plugin-transition-link/AniLink'

import backButtonStyles from './backButton.module.scss'

const BackButton = ({ where }) => {

    return (
        <Link cover direction="right" bg="#0069FF" duration={0.6} className={backButtonStyles.backButton} to={`/${where}`}><p>Go Back</p></Link>
    )
}

export default BackButton