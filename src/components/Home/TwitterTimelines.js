import React, { Component } from 'react'

import { Timeline } from 'react-twitter-widgets';


const TwitterTimeline = () =>{
    return(
       

        <div style={{display:"flex",margin:'10% 10% 0 20%', position:'relative'}}>

             <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'NASAHubble'
                  }}
                  options={{
                    height: '800',
                    width: '1000',

                  }}
                />
        </div>


    )
}

export default TwitterTimeline;