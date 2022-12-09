import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    articles = []

    constructor() {
        super();
        console.log("Hello this is news component construtre");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0650a9b8118244d592dc057f7e6bc049&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }


    handlePreClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);

        let parsedData = await data.json();

        console.log(parsedData);
        // this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();

            // this.setState({loading: false});
            // this.setState({ articles: parsedData.articles })

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }


    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">News Monkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {this.state.articles && !this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
