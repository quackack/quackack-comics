import React, { Component } from 'react'
import MediumIcon from './images/MediumIcon.png';

class ComicInfo extends Component {
  render() {
    return (
      <div className="ComicInfo">
          <img className="Icon" src={MediumIcon} title="Quackack Icon" alt="A speaker with a duck bill taped to it."/>
        <div className="License">
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
            This is a standard license and is basically meant to give you maximum freedom to use these comics without outright letting you resell them. For details of the license, I encourage you to read it for yourself, this paragraph is non binding. That being said, I am pretty flexible. If you want to use these in some commercial work (for instance a textbook), just ask me at quackackjac@gmail.com. I will likely allow it as long as the most substantial piece of the commercial work is not mine.
          </p>
        </div>
        <h2>About Me</h2>
        <p>
          I am a software engineer and a computer scientist. I am currently pursueing a PhD in theoretical computer science. For more information, check my <a href="https://www.linkedin.com/in/joshua-cook-bb2053b2/">linked in</a>.
        </p>
        <p>
          I also wrote children's book teaching set theory called <a href="https://quackack.com/data/books/pdfs/A_Stroll_Through_Cecilys_Sets.pdf">A Stroll Through Cecily\'s Sets</a> (<a href="https://www.amazon.com/dp/1073606279">In Print</a>) . Obviously I have also created these web comics and hope to do more work in the future.
        </p>
        <div className="clear"></div>
        
        
        <h2>Other things to look at</h2>
        <h3>My Products</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://teespring.com/stores/Quackack">My Shirts</a></li>
            <li><a href="https://www.amazon.com/dp/1073606279">My Books</a> (<a href="https://quackack.com/data/books/pdfs/A_Stroll_Through_Cecilys_Sets.pdf">Free Online</a>)</li>
          </ul>
        </div>
        <h3>Social Media</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://twitter.com/Quackackjac">Twitter</a></li>
            <li><a href="https://fb.me/quackackjac">Facebook</a></li>
          </ul>
        </div>
        <h3>Other Web Comics</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://xkcd.com/">xkcd</a></li>
            <li><a href="https://www.smbc-comics.com/">smbc</a></li>
            <li><a href="https://www.buttersafe.com/">buttersafe</a></li>
            <li><a href="http://mistakes.ryanestrada.com/">Ryan Made Mistakes</a></li>
            <li><a href="https://www.nerfnow.com/">Nerf Now</a></li>
            <li><a href="https://www.webtoons.com/en/challenge/system32comics/list?title_no=235074">System32Comics</a></li>
            <li><a href="http://madeofmistake.com/">MadeOfMistake</a></li>
            <li><a href="https://heybuddycomics.com/">Hey Buddy Comics</a></li>
            <li><a href="http://leftycartoons.com/">Lefty Cartoons</a></li>
          </ul>
        </div>
        <h3>Children's Books</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://www.amazon.com/dp/1073606279">My Books</a> (<a href="https://quackack.com/data/books/pdfs/A_Stroll_Through_Cecilys_Sets.pdf">Free Online</a>)</li>
            <li><a href="https://www.amazon.com/Margot-Alesund/e/B06X6JSMM1">The Baby Biochemist</a></li>
            <li><a href="https://www.amazon.com/Dr-Dhoot/e/B07L6P5176">Tinker Toddlers</a></li>
            <li><a href="https://www.sourcebooks.com/baby-university.html">Baby University</a></li>
          </ul>
        </div>
        <h3>Black Lives Matter</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="https://www.joincampaignzero.org">Campaign Zero</a> (Strategies to End Police Violence in America)</li>
            <li><a href="http://gritsforbreakfast.org/">Grits For Breakfast</a> (Local Texas Criminal Justice)</li>
            <li><a href="https://austinjustice.org/">Austin Justice Coalition</a> (Local Austin Racial Justice Group)</li>
          </ul>
        </div>
        <h3>Others</h3>
        <div className="CenteredList">
          <ul>
            <li><a href="http://www.welcometonightvale.com/">Welcome to Night Vale</a> (Weird, Creepy, Funny podcast)</li>
            <li><a href="https://littlefreelibrary.org/">Little Free Library</a> (Making Books Accessible)</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ComicInfo
