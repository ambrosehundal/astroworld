import React from "react";


const ObservatoryInfo = ({name, link, instagram}) => {
    return (
        <div className="location-info">
            <h2>{name}</h2>
            <p>{link}</p>
            <p>{instagram}</p>
            <ul>
            </ul>
        </div>
    )
}

export default ObservatoryInfo;