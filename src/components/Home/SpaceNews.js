import React, {useState, useEffect} from 'react';


const SpaceNews = () => {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
                              .then(response => response.json())
                              .then(json => setArticles(json));

    }, []);

   

    return(
        <div className="container">
            <div className="row">
                {articles.forEach(article => {
                    <p>{article.title}</p>
                })}
            </div>
        </div>

    )
}


export default SpaceNews;