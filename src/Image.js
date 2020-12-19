import React, { Component } from 'react'

class Image extends Component {
  render() {
    const images = this.props.images;
    const alt = this.props.alt;
    const title = this.props.title;
    const className = this.props.className;
    
    
    var sources = [];
    for (var i = 0; i < images.length-1; i++) {
      var image = images[i];
      sources.push(<source srcSet={image} type={this.getMimeType(image)} />);
    }
    return (
        <div>
        <picture>
          {sources}
          <img className={className} src={images[images.length-1]} title={title} alt={alt} />
        </picture>
        </div>
    );
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

export default Image