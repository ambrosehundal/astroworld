import React from "react";


const ObservatoryInfo = ({info}) => {
    return (
        <div className="location-info">
            <h5>{info.name}</h5>
            <p><a href={info.link}>See Website </a></p>
            <p><a href={info.instagram}>Instagram</a></p>
            <img src="https://images.immediate.co.uk/production/volatile/sites/25/2019/04/Lick-Observatory-HEADER-265fd9d.jpg?quality=90&resize=768,574"></img>
        </div>
    )
}

export default ObservatoryInfo;