import React, { Component } from 'react'
import Image from './Image';
import SmallIcon from './images/SmallIcon.png';

class Header extends Component {
  render() {
    return (
      <div className="ComicInfo">
        <Image className="RightIcon" images={[SmallIcon]} title="Quackack Icon" alt="A speaker with a duck bill taped to it."/>
        <Image className="LeftIcon" images={[SmallIcon]} title="Quackack Icon" alt="A speaker with a duck bill taped to it."/>
        <h1>Quackack</h1>
        <p>A web comic about computer science, and randomness. "Making the comics no one else would."</p>
      </div>
    )
  }
}

export default Header