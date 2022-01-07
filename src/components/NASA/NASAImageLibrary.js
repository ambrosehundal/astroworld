import React from "react";
import NASAImageSearchBar from "./NASAImageSeachBar";
import NASAImageSearchResults from "./NASAImageSearchResults";



const NASAImageLibrary = () => {
    return (
        <div>
        <NASAImageSearchBar/>
        <NASAImageSearchResults/>
        </div>
        
    )
   
}


export default NASAImageLibrary;