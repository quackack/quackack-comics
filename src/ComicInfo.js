import React, { Component } from 'react'

class ComicInfo extends Component {
  render() {
    return (
      <div className="ComicInfo">
        <h2>License</h2>
        <p>
          Every web comic on quackack is licensed under the <a href="https://creativecommons.org/licenses/by-nc/4.0/">"Attribution-NonCommercial 4.0 International" (CC BY-NC 4.0)</a> license.
        </p>
        <p>
          Broadly speaking, you may share, redistribute, and modify any comic provided on here as long as you:
        </p>
        <div className="CenteredList">
          <ul>
            <li>Attribute: Say that this comic came from quackack.com and which comic number it is.</li>
            <li>Non commercial: You do not try to sell the produced product.</li>
            <li>Non endorsement: You may not use the comic in a way that suggests I endorse its use.</li>
          </ul>
        </div>
        <p>
          This is a standard license and is basically meant to give you maximum freedom to use these comics without outright letting you resell them. For details of the license, I encourage you to read it for yourself, this paragraph is non binding. That being said, I am pretty flexible. If you want to use these in some commercial work (for instance a textbook), just ask me at quackackjack@gmail.com. I will likely allow it as long as the most substantial piece of the commercial work is not mine.
        </p>
        <h2>About Me</h2>
        <p>
          I am a software engineer and a computer scientist with a double major in math and computer science. For more information now, check my <a href="https://www.linkedin.com/in/joshua-cook-bb2053b2/">linked in</a>.
        </p>
        <p>
          I am also an author and have written a children's book teaching set theory called <a href="https://www.amazon.com/dp/1073606279">A Stroll Through Cecily's Sets</a>. Obviously I have also created these web comics and hope to do more work in the future.
        </p>
        <h2>Other things to look at</h2>
        <h3>Other Web Comics</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://xkcd.com/">xkcd</a></li>
            <li><a href="https://www.smbc-comics.com/">smbc</a></li>
            <li><a href="https://www.buttersafe.com/">buttersafe</a></li>
          </ul>
        </div>
        <h3>Children's Books</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://www.amazon.com/dp/1073606279">My Books</a></li>
            <li><a href="https://www.sourcebooks.com/baby-university.html">Baby University</a></li>
            <li><a href="https://www.amazon.com/Dr-Dhoot/e/B07L6P5176">Tinker Toddlers</a></li>
            <li><a href="https://www.amazon.com/gp/product/B078WTZ6BT">The Baby Biochemist</a></li>
          </ul>
        </div>
        <h3>Others</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="http://www.welcometonightvale.com/">Welcome to Night Vale</a> (Weird, Creepy, Funny)</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ComicInfo