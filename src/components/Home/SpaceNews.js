import React, {useState, useEffect} from 'react';


const SpaceNews = () => {

    const [articles, setArticles] = useState({});

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
                              .then(response => response.json())
                              .then(json => setArticles(json));

    }, []);

    
    const articlesList = [];

    for (const [key, value] of Object.entries(articles)) {
        articlesList.push({
            title: value.title,
            summary: value.summary,
            imageUrl: value.imageUrl,
            siteUrl : value.url

        })

                       
    }

    const newsArticles = [];

    articlesList.forEach(article => {
        newsArticles.push([article.title, article.summary]);
    })


    return(
        <div className="container">
            <div className="row">
                <h1>articles </h1>
              
                {newsArticles}
              
            </div>
        </div>

    )
}


export default SpaceNews;