import React from "react";


const ObservatoryInfo = ({info}) => {
    return (
        <div className="location-info">
            <h5>{info.name}</h5>
            <p><a href={info.link}>See Website </a></p>
            <p><a href={info.instagram}>Instagram</a></p>
            <img src=""></img>
        </div>
    )
}

export default ObservatoryInfo;