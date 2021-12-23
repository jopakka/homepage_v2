import React from "react";
import "./Home.css";
import {ContentData} from "../../resources/ContentData";

const Home = () => {
    const data = ContentData.home;
    return (
        <>
            <h1>{data.title}</h1>
            <p className="center">{data.intro}</p>
            <img src={data.image.src} alt={data.image.alt}
                 className="big-profile-picture"/>
        </>
    );
};

export default Home;