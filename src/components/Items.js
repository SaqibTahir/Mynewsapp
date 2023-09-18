import React, { Component } from 'react'

export class Items extends Component {
  render() {
    let { title, description, imageurl, newsurl,author,date,source } = this.props;
    return (
      <div className="card">
        <img src={!imageurl ? 'https://hips.hearstapps.com/hmg-prod/images/cvanessadewson-nature-4-1618585013.jpg?crop=1xw:0.8430474604496253xh;center,top&resize=2048:*' : imageurl} className="card-img-top" alt="..." />
        <div className={`card-body bg-${this.props.theme}`}>
          <h5 className="card-title" style={{color:this.props.theme ==='light'?'black':'white'}}>{title}....<span className="badge rounded-pill text-bg-success mx-1">{source}</span></h5>
          <p className="card-text" style={{color:this.props.theme ==='light'?'black':'white'}}>{description}.....</p>
          <p className="card-text"><small className="text-body-secondary">{!author?'Unknown':author} To  {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-primary" style={{color:this.props.theme ==='light'?'btn-black':'white'}}>Read More</a>
        </div>
      </div>
    )
  }
}

export default Items

