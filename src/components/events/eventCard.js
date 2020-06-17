import React from 'react'
import { Link } from 'gatsby'

import eventCardStyles from './eventCard.module.scss'

const EventCard = ({ frontmatter: { title, date, author },
    fields: { slug }, excerpt }) => {

    return (
        <div className={eventCardStyles.event}>
            <Link to={`/events/${slug}`}>
                <h4>{title}</h4>
                <p>{date}</p>
                <p>By {author}</p>
                <p>{excerpt}</p>
            </Link>
        </div>
    )
}

export default EventCard