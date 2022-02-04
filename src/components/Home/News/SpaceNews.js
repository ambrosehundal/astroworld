import React, {useState, useEffect} from 'react';
import SpaceNewsArticles from './SpaceNewsArticles';

const SpaceNews = () => {

    const [articles, setArticles] = useState([]);

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
        let articleInfo = [article.title, article.summary, article.imageUrl, article.siteUrl];
        console.log(typeof(articleInfo));
        newsArticles.push(articleInfo);

    })


    return(
        <div className="container">
            <div className="row">
                <h2>Everything Astronomy</h2>
                <p>Learn. Explore. Question. Stay Curious</p>
                <SpaceNewsArticles newsArticles={newsArticles}/>
            </div>
        </div>

    )
}


export default SpaceNews;