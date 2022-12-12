// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div>
            <div className="card" >
                <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2022/11/upi-166816266716x9.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
