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
        let articleInfo = [article.title, article.summary, article.imageUrl, article.siteUrl];
        console.log(typeof(articleInfo));
        newsArticles.push(articleInfo);

    })


    return(
        <div className="container">
            <div className="row">
            
                {newsArticles.map((item => <div style={{"margin-top": "3%"}} className="col-md-12"> <div className="row"> <div className="col-md-4"><h2>{item[0]}</h2></div><div className="col-md-4"><p><b><a href={item[3]} target="_blank">{item[1]}</a></b></p></div><div className="col-md-4"><img src={item[2]} height="300" weight="300"/></div></div> <hr
    style={{
      backgroundColor: 'black',
      height: 3
    }}
  /></div>))}
              
            </div>
        </div>

    )
}


export default SpaceNews;