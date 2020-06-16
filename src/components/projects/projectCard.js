import React from 'react';

import { Link } from 'gatsby'

import projectCardStyles from './projectCard.module.scss'

const checkDescription = text => {
    // Check if description exits
    if (text) {
        // If desc has < 100 char, return as is
        if (text.length < 100) return text;
        // If desc has > 100 char, return partial
        else return `${text.slice(0, 100)}...`;
    } else
        return "Project description not found";
}

const ProjectCard = ({ name, description, image, slug }) => {
    let descriptionToRender = checkDescription(description);

    return (
        <div className={projectCardStyles.project}>
            <Link to={`/project/${slug}`}>
                <img src={image || "https://source.unsplash.com/450x337.5/?tech"} alt={name} loading="lazy" />
                <div className={projectCardStyles.info}>
                    <h3>{name || "Project name not found"}</h3>
                    <p>{descriptionToRender}</p>
                </div>
            </Link>
        </div>
    )
};

export default ProjectCard;