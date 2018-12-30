import React, { Component } from "react";
import GameItem from './GameItem';
import Styled from "styled-components";



const H1 = Styled.h1`
  color:#e7f3fd;
`;
const P = Styled.p`
  color:#b8dafa;
  
`;

class GamePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let dropDownClass = ["dropdown"];
    if (this.props.ShowDropdown) {
      dropDownClass.push("is-active");
    }

    const { navItems, currentTab, currentStreams, error } = this.props;
    let currentTitle = navItems[currentTab];
    const pageDescription = 'Top 24 popular live streams sorted by current viewers';

    let Gamepage = <P style={{ textAlign: 'center', margin: '300px' }}>Something went wrong.....</P>
    if (!error) {
      Gamepage = (
        <section>
          <H1 className="main--title mt-3 display-4 text-center">{currentTitle ? currentTitle : navItems[0]}</H1>
          <P className="main--subtitle lead text-center">
            {pageDescription}
          </P>

          <div className="container">
            <div className="streams row">
              {currentStreams.map((item, index) => {
                return (
                  <GameItem
                    item={item}
                    key={'key_' + index}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )
    }
    return (
      <div>
        {Gamepage}
      </div>
    );
  }
}

export default GamePage;
