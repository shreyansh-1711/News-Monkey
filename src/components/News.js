import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []

    constructor() {
        super();
        console.log("Hello this is news component construtre");
        this.state = {

            loading: false,
            // page:1;
        }
    }

    async componentDidMount() {
        console.log("CDM");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0650a9b8118244d592dc057f7e6bc049";
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>News Monkey - Top Headlines</h1>

                <div className="row">
                    { this.state.articles && this.state.articles.map((element) => {
                        console.log(element);
                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
<div className="container d-flex justify-content-between">
<button type="button" className="btn btn-dark">&larr; previous</button>
<button type="button" className="btn btn-dark">next &rarr;</button>
</div>
            </div>
        )
    }
}

export default News
