import React from 'react';
import {Icon} from '@iconify/react';
import ObservatoryInfo from './ObservatoryInfo';
import telescopeIcon from '@iconify/icons-mdi/telescope';


const LocationMarker = ({latitude, longitude, handleMouseOver, handleMouseOut}) => {

    return(
        <div className="location-icon" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Icon icon="mdi:telescope"/>
    </div>

    )
}



export default LocationMarker;