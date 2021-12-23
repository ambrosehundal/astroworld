import React from "react";


const ObservatoryInfo = ({info}) => {
    return (
        <div className="location-info">
            <h2>{info.name}</h2>
            <p>{info.link}</p>
            <p>{info.instagram}</p>
           
            <ul>
            </ul>
        </div>
    )
}

export default ObservatoryInfo;