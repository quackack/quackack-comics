import React, { Component } from 'react'
import ComicSelector from './ComicSelector';


class Comic extends Component {
  render() {
    const comicData = this.props.comicData;
    const imageFolder = this.props.imageFolder;
    const comicCount = this.props.comicCount;
    const comicIndex = parseInt(comicData.index);
    
    var pictureTag;
    if ("images" in comicData) {
      var sources = [];
      for (var i = 0; i < comicData.images.length-1; i++) {
        var image = comicData.images[i];
        sources.push(<source srcSet={imageFolder + image} type={this.getMimeType(image)} />);
      }
      pictureTag = (
          <picture>
            {sources}
            <img className="Comic" src={imageFolder + comicData.images[comicData.images.length-1]} title={comicData.extra_text} alt={comicData.comic_text} />
          </picture>
      )
    } else {
      pictureTag = (
          <picture>
            <source srcSet={imageFolder + comicData.index + ".avif"} type="image/avif" />
            <img className="Comic" src={imageFolder + comicData.index + ".jpeg"} title={comicData.extra_text} alt={comicData.comic_text} />
          </picture>
      )
    }
    return (
        <div className="ComicContainer">
        <h2>{comicData.name}</h2>
        <ComicSelector comicIndex={comicIndex} comicCount={comicCount}/>
        {pictureTag}
        <h3 className="ComicDate">Creation Date: {comicData.date}</h3>
        <ComicSelector comicIndex={comicIndex} comicCount={comicCount}/>
        <div className="Advertisement"><h3>Comic Advertisement</h3><p>{comicData.advertisement}</p></div>
        </div>)
  }
  
  getMimeType = fileName => {
    const formats = {
      "avif": "image/avif",
      "svg": "image/svg",
      "png": "image/png",
      "jpeg": "image/jpeg"
      };
    return formats[fileName.split('.').pop()];
  }
}

export default Comic