import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://github.com/fcgec">FOSS Community GEC</a>
        </footer>
    )
}

export default Footer