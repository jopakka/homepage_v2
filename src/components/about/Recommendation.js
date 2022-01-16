import React from "react";
import "./Recommendation.css"

const Recommendation = ({referee, text}) => {
    return (
        <div className="recommendation center">
            <p className="recommendation-text">{text}</p>
            <p className="recommendation-referee">{referee}</p>
        </div>
    );
};

export default Recommendation;
