import React from 'react'
// import { Link } from 'gatsby'
import Link from 'gatsby-plugin-transition-link/AniLink'

import backButtonStyles from './backButton.module.scss'

const BackButton = ({ where }) => {

    return (
        <Link cover direction="up" bg="#131314" duration={0.5} className={backButtonStyles.backButton} to={`/${where}`}><p>Go Back</p></Link>
    )
}

export default BackButton