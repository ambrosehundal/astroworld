import React from "react";


const NASAImageSearchResults = props => {
    const imageLinks = [];

    let imageMetadata;
    if(props.images){
        for(const [key, value] of Object.entries(props.images)){
            imageMetadata = [value.data[0].title, value.links[0].href];
            imageLinks.push(imageMetadata);
        }

    }    
    return (
        <div className="container imageResults">
            <div className="row">
            <div className="col-md-12">
            <div className="row"> 
               {imageLinks.map(item => 
                    <div className="col-md-6">

                 
                  
                   <img src={item[1]} height="300" weight="300" className="nasaImage"/>

                   <h6>{item[0]}</h6>

                   </div>
                 

               )}
              </div>
            </div>
            </div>
        
        </div>
    )

}


export default NASAImageSearchResults;