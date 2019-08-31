import React, { Component } from 'react'

class Recommendations extends Component {
  render() {
    return (
      <div className="ComicContainer">
        <img className="Comic" src={comicData.image} title={comicData.extra_text} alt={comicData.comic_text}/>
      </div>
    )
  }
}

export default Recommendations