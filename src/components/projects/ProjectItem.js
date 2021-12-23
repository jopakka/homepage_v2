import React from "react";
import PropTypes from 'prop-types';
import "./ProjectItem.css";

const ProjectItem = ({item}) => {
    return (
        <a href={item.url} className="project-item">
            <img src={item.img} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
        </a>
    );
};

ProjectItem.propTypes = {
    title: PropTypes.object
};

export default ProjectItem;