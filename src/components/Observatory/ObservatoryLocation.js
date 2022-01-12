import React from 'react';
import {Icon} from '@iconify/react';
import ObservatoryInfo from './ObservatoryInfo';
import Popup from 'reactjs-popup';



const ObservatoryLocation = ({lat, lng, info}) => {

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



export default ObservatoryLocation;