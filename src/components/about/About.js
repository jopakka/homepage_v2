import React from "react";
import {ContentData} from "../../resources/ContentData.js";

const About = () => {
    const data = ContentData.about;
    return (
        <>
            <h1>{data.title}</h1>
            {data.texts.map((value, index) => <p key={index} className="center">{value}</p>)}
        </>
    );
};

export default About;