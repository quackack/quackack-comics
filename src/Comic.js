import React, { Component } from 'react'


class Comic extends Component {
  render() {
    const comicData = this.props.comicData;
    const imageFolder = this.props.imageFolder;
    
    if ("images" in comicData) {
      var sources = [];
      for (var i = 0; i < comicData.images.length-1; i++) {
        var image = comicData.images[i];
        sources.push(<source srcSet={imageFolder + image} type={this.getMimeType(image)} />);
      }
      
      return (
        <div className="ComicContainer">
          <picture>
            {sources}
            <img className="Comic" src={imageFolder + comicData.images[comicData.images.length-1]} title={comicData.extra_text} alt={comicData.comic_text} />
          </picture>
        </div>
      )
    } else {
      return (
        <div className="ComicContainer">
          <picture>
            <source srcSet={imageFolder + comicData.index + ".avif"} type="image/avif" />
            <img className="Comic" src={imageFolder + comicData.index + ".jpeg"} title={comicData.extra_text} alt={comicData.comic_text} />
          </picture>
        </div>
      )
    }
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