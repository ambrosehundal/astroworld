import React, {useState} from "react";

const NASAImageSearchBar = () => {

  const [searchQuery, setSearchQuery] = useState(null);

  const getNASAImages = (evt) => {
    fetch(`"https://images-api.nasa.gov/search
    ?q=${searchQuery}`)
  }

    return (
        <div className="container">
        <h1>NASA Image Library</h1>
        <input
        type="text"
        placeholder="Search"
        value={null}
        onClick={null}
      />
        
        </div>
    )

}

export default NASAImageSearchBar;