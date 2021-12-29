import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';
import ObservatoryInfo from './ObservatoryInfo';
import Popup from 'reactjs-popup';
import Observatory from './Observatory';


const LocationMarker = ({lat, lng, info}) => {

    return(
        <div className="container">

        <div className="row">

        <div className="col-md-12">

        
        <Popup
        trigger={
            <div className="location-icon">
            <Icon  icon="mdi:telescope"/>
            </div>
        }
        position={'left top'}
        on={['hover']}
        
      >
          <ObservatoryInfo info={info}/>
      </Popup>
        
        
            
        
        </div>
        </div>
       
       
      

    </div>

   

    )
}



export default LocationMarker;