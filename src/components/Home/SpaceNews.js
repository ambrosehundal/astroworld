import React, {useState, useEffect} from 'react';


const SpaceNews = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
                              .then(response => response.json())
                              .then(json => setArticles(json));

    }, []);

    console.log(articles);
    
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
        let articleInfo = [article.title, article.summary, article.imageUrl];
        console.log(typeof(articleInfo));
        newsArticles.push(articleInfo);

    })


    return(
        <div className="container">
            <div className="row">
                <h1>articles </h1>
            
                {newsArticles.map((item => <div className="col-md-8"><h2>{item[0]}</h2><img src={item[2]} height="300" weight="300"/><p>{item[1]}</p></div>))}
              
            </div>
        </div>

    )
}


export default SpaceNews;