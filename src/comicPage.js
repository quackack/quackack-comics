import React, { Component } from 'react'
import ComicSelector from './ComicSelector';
import Comic from './Comic';
import ComicInfo from './ComicInfo';
import SmallIcon from './images/SmallIcon.png';

class comicPage extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    
    const comicCount = 32;
	  const comicIndex = this.getComicNumber(comicCount);
    
    // Set the state directly. Use props if necessary.
    this.state =  {
      comicData: {
        "index": comicIndex,
        "date": "2020-01-06",
        "name": "Comic Meta Data Loading",
        "image": "https://quackack.com/data/comics/images/" + comicIndex + ".jpeg",
        "extra_text": "Comic Meta data not yet loaded.",
        "comic_text": "Image is still loading."
      },
      comicIndex: comicIndex,
      comicCount: comicCount
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
    this.setState({
      comicIndex: i
    });
    const url = "https://quackack.com/data/comics/metadata/" + i + ".json";
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
        <img className="RightIcon" src={SmallIcon} title="Quackack Icon" alt="A speaker with a duck bill taped to it."/>
        <img className="LeftIcon" src={SmallIcon} title="Quackack Icon" alt="A speaker with a duck bill taped to it."/>
        <h1>Quackack</h1>
        <p>A web comic about computer science, and randomness. "Making the comics no one else would."</p>
        
        <div className="clear"></div>
        <h2>{this.state.comicData.name}</h2>
        <ComicSelector comicIndex={this.state.comicIndex} comicCount={this.state.comicCount}/>
        <Comic comicData={this.state.comicData}/>
        <h3 className="ComicDate">Creation Date: {this.state.comicData.date}</h3>
        <ComicSelector comicIndex={this.state.comicIndex} comicCount={this.state.comicCount}/>
        <ComicInfo />
      </div>
    )
  }
}

export default comicPage