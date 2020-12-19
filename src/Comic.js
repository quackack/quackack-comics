import React, { Component } from 'react';
import ComicSelector from './ComicSelector';
import Image from './Image';


class Comic extends Component {
  render() {
    const comicData = this.props.comicData;
    const imageFolder = this.props.imageFolder;
    const comicCount = this.props.comicCount;
    const comicIndex = parseInt(comicData.index);
    
    var images;
    if ("images" in comicData) {
      images = comicData.images.map(image => imageFolder + image);
    } else {
      images = [imageFolder + comicData.index + ".avif", imageFolder + comicData.index + ".jpeg"];
    }
    return (
        <div className="ComicContainer">
        <h2>{comicData.name}</h2>
        <ComicSelector comicIndex={comicIndex} comicCount={comicCount}/>
        <Image className="Comic" images={images} title={comicData.extra_text} alt={comicData.comic_text} />
        <h3 className="ComicDate">Creation Date: {comicData.date}</h3>
        <ComicSelector comicIndex={comicIndex} comicCount={comicCount}/>
        <div className="Advertisement"><h3>Comic Advertisement</h3><p>{comicData.advertisement}</p></div>
        </div>)
  }
}

export default Comic