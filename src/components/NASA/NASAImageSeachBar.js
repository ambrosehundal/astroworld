import React, {useState} from "react";

const NASAImageSearchBar = () => {

  const [searchQuery, setSearchQuery] = useState(null);

  const [searchResults, setResults] = useState(null);

  const getNASAImages = (searchValue) => {
    fetch(`https://images-api.nasa.gov/search?q=${searchValue}&page=1`).then(response => setResults(response));
  }

  console.log(searchResults);

    return (
        <div className="container">
        <h1>NASA Image Library</h1>
        <input
        type="text"
        placeholder="Search"
        value={null}
        onChange={e => getNASAImages(e.target.value)}
        />
        
        </div>
    )

}

export default NASAImageSearchBar;