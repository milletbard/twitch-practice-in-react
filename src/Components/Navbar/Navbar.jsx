import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";

const Navbar = props => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <a className="navbar-brand text-white">Twitch Live Games</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        {[0,1,2,3,4].map((i)=>{
          return  <NavItem 
          navItem={props.navItems[i]}
          gameId={props.gamesId[i]}
          key={i}
          />
        })}
       
        </ul>
        <span className="navbar-text text-light">
          Top 5 popular games on Twitch <mark className="bg-light">NOW</mark>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
