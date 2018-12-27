import React, { Component } from "react";
import "bulma";

class Header extends Component {
  render() {
    return (

<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
  <a className="navbar-brand text-white" >Twitch Live Games</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
   
      <a className="game--1 nav-link" href="#" id={33214}>Fortnite</a>
      
     
      </li>
      <li className="nav-item">
        <a className="game--2 nav-link" href="#" id={21779}>League of Legends</a>
      </li>
      <li className="nav-item">
        <a className="game--3 nav-link" href="#" id={509658}>Just Chatting</a>
      </li>
      <li className="nav-item">
        <a className="game--4 nav-link" href="#" id={5945}>Atlas</a>
      </li>
      <li className="nav-item">
        <a className="game--5 nav-link" href="#" id={493057}>PLAYERUNKNOWN'S BATTLEGROUNDS</a>
      </li>
    </ul>
    <span className="navbar-text text-light">
      Top 5 popular games on Twitch <mark className="bg-light">NOW</mark>
    </span>
  </div>
</nav>


    );
  }
}

export default Header;
