import React, {useState, useEffect} from 'react';


const SpaceNews = () => {

    const [articles, setArticles] = useState({});

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
                              .then(response => response.json())
                              .then(json => setArticles(json));

    }, []);

    
    const articleTitles = [];
    for (const [key, value] of Object.entries(articles)) {
        articleTitles.push(value.title);

                  
    }

    console.log(articleTitles);

   

    return(
        <div className="container">
            <div className="row">
                <h1>articles </h1>
              
              {articleTitles[1]}
              
            </div>
        </div>

    )
}


export default SpaceNews;