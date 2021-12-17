import React from 'react';
import {Icon} from '@iconify/react';
import ObservatoryInfo from './ObservatoryInfo';
import telescopeIcon from '@iconify/icons-mdi/telescope';


const LocationMarker = ({latitude, longitude, handleMouseOver}) => {

    
    

    return(
        <div className="location-icon" onMouseOver={handleMouseOver}>
        <Icon icon="mdi:telescope"/>
    </div>

    )
}



export default LocationMarker;