import React from 'react';



const SpaceNewsArticles = (props) => {
    return(
        <div>
            {props.newsArticles.map((item => <div style={{"margin-top": "3%"}} className="col-md-12"> <div className="row"> <div className="col-md-4"><h2>{item[0]}</h2></div><div className="col-md-4"><p><b><a href={item[3]} target="_blank">{item[1]}</a></b></p></div><div className="col-md-4"><img src={item[2]} height="300" weight="300"/></div></div> <hr
        style={{
          backgroundColor: 'black',
          height: 3
        }} /></div>))}
        </div>
    )


}

export default SpaceNewsArticles;