import React from 'react';


const NavItem = (props) => {
    return(
    
      <li className="nav-item ">
        <a className=" nav-link" href="#" id={props.gameId}>
          {props.navItem}
        </a>
      </li>
  
    )
}

export default NavItem;