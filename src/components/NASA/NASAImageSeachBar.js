import React, {useState} from "react";
import NASAImageSearchResults from "./NASAImageSearchResults";

const NASAImageSearchBar = () => {

  const [searchQuery, setSearchQuery] = useState(null);

  const [responseMessage, setResponseMessage] = useState(null);

  const [searchResults, setResults] = useState(null);

  const getNASAImages = (searchValue) => {
    fetch(`https://images-api.nasa.gov/search?q=${searchValue}&page=1`).then(response => {
      if(response.status === 200){
        return response.json();
      }
      else if(response.status === 400){
        setResponseMessage("Bad Request. Please try again.");
      }
      else if(response.status >= 500){
        setResponseMessage("API Server Error. Please try again");
      }
    }).then(json => setResults(json.collection));
  }

    return (
        <div className="container">
        <h1>NASA Image Library</h1>
        <input
        type="text"
        placeholder="Search"
        value={null}
        onChange={e => getNASAImages(e.target.value)}
        />

        <NASAImageSearchResults images={searchResults}/>
        
        </div>
    )

}

export default NASAImageSearchBar;