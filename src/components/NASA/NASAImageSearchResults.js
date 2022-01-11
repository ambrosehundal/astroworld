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
        <div className="container">
            <div className="row">
            <div className="col-md-12">
               {imageLinks.map(item => 

                   <div className="row"> 
                   <h6>{item[0]}</h6>
                   <img src={item[1]}/>
                   </div>

               )}
            </div>
            </div>
        
        </div>
    )

}


export default NASAImageSearchResults;