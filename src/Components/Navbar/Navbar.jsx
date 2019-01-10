import React, { Component } from "react";




const NavItem = (props) => {
  const { navItems, onChange, gameOrder, currentTab = 0 } = props;
  // console.log(currentTab)
  return (
    <li className={currentTab === gameOrder ? "nav-item active font-weight-bold" : "nav-item font-weight-bold"}>
      <a onClick={() => onChange(gameOrder)} className=" nav-link" href="#" >
        {navItems[gameOrder]}
      </a>
    </li>
  )
}

const Navbar = props => {
  const { navItems, currentTab, onChange } = props;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <a className="navbar-brand text-white font-weight-bold">Twitch Live Games</a>
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
          {[0, 1, 2, 3, 4].map(gameOrder  => {
            return <NavItem
              navItems={navItems}
              currentTab={currentTab}
              onChange={onChange}
              gameOrder={gameOrder}
              key={gameOrder}
            />
          })}

        </ul>
        <span className="navbar-text text-light text-white font-weight-bold">
          Top 5 popular games on Twitch <mark className="bg-light">NOW</mark>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
