import React, { Component } from 'react'
import Comic from './Comic';
import ComicInfo from './ComicInfo';
import Header from './Header';

import {COMIC_COUNT, COMIC_IMAGE_FOLDER, COMIC_META_DATA_FOLDER} from './Constants';

class comicPage extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    
    const comicIndex = this.getComicNumber(COMIC_COUNT);
    
    // Set the state directly. Use props if necessary.
    this.state =  {
      comicData: {
        "index": comicIndex,
        "date": "2020-08-16",
        "name": "Comic Meta Data Loading",
        "extra_text": "Comic Meta data not yet loaded.",
        "comic_text": "Image is still loading."
      },
      comicIndex: comicIndex
    }
    this.setStateIndex(comicIndex);
  }

  getComicNumber = comicCount => {
    if (null === this.props.match.params.id ||
        undefined  === this.props.match.params.id ||
        "" === this.props.match.params.id) {
      return comicCount - 1;
    }
    const comicIndex = parseInt(this.props.match.params.id);
    if (isNaN(comicIndex) || comicIndex >= comicCount || comicIndex < 0) {
      return 6;
    }
    return comicIndex;
  }

  setStateIndex = i => {
    const url = COMIC_META_DATA_FOLDER + i + ".json";
    fetch(url).then(result => result.json()).then(result => {
      this.setState({
        comicData: result,
        comicIndex: i
      });
    });
  }

  updateIndex = () => {
    const newComicIndex = this.getComicNumber(this.state.comicCount);
    if (newComicIndex !== this.state.comicIndex) {
      this.setStateIndex(newComicIndex)
    }
  }

  render() {
    this.updateIndex();
    return (
      <div className="ComicPage">
        <Header />
        
        <div className="clear"></div>
        <Comic comicData={this.state.comicData} imageFolder={COMIC_IMAGE_FOLDER}  comicCount={COMIC_COUNT}/>
        <ComicInfo />
      </div>
    )
  }
}

export default comicPage