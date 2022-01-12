import React, {useState} from "react";
import NASAImageSearchResults from "./NASAImageSearchResults";

const NASAImageSearchBar = () => {

  const [responseMessage, setResponseMessage] = useState(null);

  const [searchResults, setResults] = useState(null);

  const getNASAImages = (searchValue) => {
    fetch(`https://images-api.nasa.gov/search?q=${searchValue}&page=1&media_type=image`).then(response => {
      if(response.status === 200){
        setResponseMessage("Fetch results successful");
        return response.json();
      }
      else if(response.status === 400 || response.status === 403){
        setResponseMessage("Bad Request. Please try again or refresh the page.");
      }
      else if(response.status >= 500){
        setResponseMessage("API Server Error. Please try again");
      }
    }).then(json => setResults(json.collection.items));
  }

  

    return (
        <div className="container">
          <div className="row">

         
        <h1>NASA Image Library</h1>
        
        <input
        type="text"
        placeholder="Search"
        value={null}
        onChange={e => getNASAImages(e.target.value)}
        />
        </div>
        
        <div className="row">
          <div className="col-md-1">

          </div>

          <div className="col-md-10">
           <NASAImageSearchResults images={searchResults} apiResponse={responseMessage}/>
          </div>
       

       

        <div className="col-md-1">
            
          </div>

        </div>
       
        </div>
    )

}

export default NASAImageSearchBar;