import React from "react";
import "./Projects.css";
import {ContentData} from "../../resources/ContentData";
import {SchoolProjectsData} from "../../resources/SchoolProjectsData";
import {PersonalProjectsData} from "../../resources/PersonalProjectsData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    const data = ContentData.projects;
    return (
        <>
            <h1>{data.title}</h1>

            <h2>Personal projects</h2>
            <div className="project-container">
                {PersonalProjectsData.map((project, index) => <ProjectItem key={index} item={project}/>)}
            </div>

            <h2>School Projects</h2>
            <div className="project-container">
                {SchoolProjectsData.map((project, index) => <ProjectItem key={index} item={project}/>)}
            </div>
        </>
    );
};

export default Projects;