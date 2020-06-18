import React from 'react'
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerGrid}>
                <div>
                    <h6>The Club</h6>
                    <ul>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/members">Members</Link></li>
                        <li><Link to="/">Achievements</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/events">Events &amp; Workshops</Link></li>
                    </ul>
                </div>
                <div>
                    <h6>Students</h6>
                    <ul>
                        <li><a href="https://github.com/fcgec/">How to join?</a></li>
                        <li><a href="https://github.com/fcgec/resources">Learning Resources</a></li>
                        <li><Link to="/events">Events &amp; Workshops</Link></li>
                    </ul>
                </div>
                <div>
                    <h6>Partners</h6>
                    <ul>
                        <li><Link to="/members">View Profiles</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div>
                    <h6>Contact Us</h6>
                    <ul>
                        <li><span>IRC Chat</span><p>Lorem, ipsum dolor.</p></li>
                        <li><span>Email</span><p className={footerStyles.lineBreak}><a href="mailto:gecfossclub@protonmail.com">gecfossclub@protonmail.com</a></p></li>
                        <li><span>Address:</span><p>Goa College of Engineering, Farmagudi, Goa, India - 403401</p></li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles.footerEnd}>
                <p>© {new Date().getFullYear()}
                    <a href="https://github.com/fcgec"> FOSS Club GEC</a></p>
            </div>
        </footer>
    )
}

export default Footer