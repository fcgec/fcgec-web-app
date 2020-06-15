import React from 'react'
import { Link } from 'gatsby'

import backButtonStyles from './backButton.module.scss'

const BackButton = ({ where }) => {

    return (
        <Link className={backButtonStyles.backButton} to={`/${where}`}><p>Go Back</p></Link>
    )
}

export default BackButton