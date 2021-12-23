import React from "react";
import "./Projects.css";
import {ContentData} from "../../resources/ContentData";
import {ProjectsData} from "../../resources/ProjectsData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    const data = ContentData.projects;
    return (
        <>
            <h1>{data.title}</h1>
            <div className="project-container">
                {ProjectsData.map((project, index) => <ProjectItem key={index} item={project} />)}
            </div>
        </>
    );
};

export default Projects;