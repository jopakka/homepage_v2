import React from "react";
import {ContentData} from "../../resources/ContentData.js";
import {Recommendations} from "../../resources/Recommendations";
import Recommendation from "./Recommendation";
import "./About.css"

const About = () => {
    const data = ContentData.about;
    return (
        <>
            <h1>{data.title}</h1>
            <div className="about-text">{data.texts.map((value, index) => <p key={index} className="center">{value}</p>)}</div>
            {Recommendations.map(r => <Recommendation text={"\"" + r.text + "\""} referee={r.referee} /> )}
        </>
    );
};

export default About;