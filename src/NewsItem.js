import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <div style={{
              dispay: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              top: "0",
              right: "0"
            }}>
              <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${this.props.badgeColor}`}>

                {source}
              </span>
            </div>
            <p class="card-text"><small className="text-body-secondary">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsurl} target="_blank" className="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
