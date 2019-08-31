import React, { Component } from 'react'

class Comic extends Component {
  render() {
    const comicData = this.props.comicData; 
    return (
      <div className="ComicContainer">
        <img className="Comic" src={comicData.image} title={comicData.extra_text} alt={comicData.comic_text}/>
      </div>
    )
  }
}

export default Comic