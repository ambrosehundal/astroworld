import React from "react";


const NASAImageSearchResults = props => {
    const imageLinks = [];

    if(props.images){
        for(const [key, value] of Object.entries(props.images)){
            imageLinks.push(value.links[0].href);
        }

    }

    

    console.log(imageLinks);

    
    return (
        <div className="container">
            <div className="col-md-12">
               {imageLinks.map(image => <img src={image}/>)}
            </div>
        
        </div>
    )

}


export default NASAImageSearchResults;