// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {

//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general'
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }



//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }


//     constructor(props) {
//         super(props);
//         console.log("Hello this is news component construtre");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey `
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page}&pageSize=${props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json();

//         console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//     }

//     async componentDidMount() {
//         this.updateNews();
//     }


//     handlePreClick = async () => {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//         // this.setState({ loading: true });
//         // let data = await fetch(url);

//         // let parsedData = await data.json();

//         // console.log(parsedData);
//         // // this.setState({ articles: parsedData.articles })

//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         // })

//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         //     this.setState({ loading: true });
//         //     let data = await fetch(url);
//         //     let parsedData = await data.json();

//         //     // this.setState({loading: false});
//         //     // this.setState({ articles: parsedData.articles })

//         //     this.setState({
//         //         page: this.state.page + 1,
//         //         articles: parsedData.articles,
//         //         loading: false
//         //     })
//         // }
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews();
//     }

//     fetchMoreData = async () => {
//         this.setState({ page: this.state.page + 1 });
//         // this.updateNews();
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0650a9b8118244d592dc057f7e6bc049&page=${this.state.page}&pageSize=${props.pageSize}`;
//         // this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json();

//         console.log(parsedData);
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults

//         })
//     };

//     render() {
//         return (
//             <>

//                 <h1 style={{ margin: '40px 0px' }} className="text-center">News Monkey - Top Headlines on {this.capitalizeFirstLetter(props.category)}</h1>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner />}
//                 >
//                     <div className="container">
//                         <div className="row">
//                             {this.state.articles && this.state.articles.map((element) => {
//                                 console.log(element);
//                                 return <div className="col-md-4" key={element.url} >
//                                     <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
//                                 </div>
//                             })}
//                         </div>

//                     </div>
//                 </InfiniteScroll>


//             </>
//         )
//     }
// }

// export default News


import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

useEffect(() => {
    updateNews();

}, [])


    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page+1)
       updateNews()
    }

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      
    };

  
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}

                >
                    <div className="container">

                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
   
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News