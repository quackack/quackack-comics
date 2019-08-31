import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ComicSelector extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state =  {
      comicIndex: this.props.comicIndex,
      comicCount: this.props.comicCount
    }
  }
  
  getComicNumber = () => {
    return this.props.comicIndex;
  }
  
  
  randComic = state => {
    return "/" + Math.floor(Math.random() *  state.comicCount);
  }
  
  nextComic = state => {
    return "/" + ((state.comicIndex + 1) % state.comicCount);
  }
  
  lastComic = state => {
    return "/" + ((state.comicIndex + state.comicCount - 1) % state.comicCount);
  }
  
  render() {
    const state = {
        comicIndex: this.props.comicIndex,
        comicCount: this.props.comicCount
      };
    return (
        <div className="ComicSelector">
          <Link className="ComicSelectorButton" to={this.lastComic(state)}>Prev</Link>
          <Link className="ComicSelectorButton" to={this.randComic(state)}>Rand</Link>
          <Link className="ComicSelectorButton" to={this.nextComic(state)}>Next</Link>
        </div>
    )
  }
}

export default ComicSelector