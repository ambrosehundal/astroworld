import React from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';


const LocationMarker = ({latitude, longitude, onClick}) => {

    return(
        <div className="location-icon" onMouseEnter={onClick}>
        <Icon icon="mdi:telescope"/>
    </div>

    )
}



export default LocationMarker;