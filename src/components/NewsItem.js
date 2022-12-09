// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style = {{width: "18rem"}}>
                    <img src={!imageUrl?"https://images.livemint.com/img/2022/12/08/600x338/Infosys_1647348672464_1670476070139_1670476070139.jpg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> {title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} rel="noreferrer" target= "_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }s
}

export default NewsItem
