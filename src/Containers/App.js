import React, { Component } from "react";
import Layout from "../Components/Layout";
import Styled from "styled-components";
import "./App.css";
import axios from "axios";
const Div = Styled.div`
    background-image: url(https://i.imgur.com/oAf6eLy.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
`;

class App extends Component {
  state = {
    navItems: [],
    gamesId: []
  };
  getGames = () => {
    return axios.get("https://api.twitch.tv/helix/games/top?first=5", {
      headers: {
        "Client-ID": "jdsl3lgf1c8gcxi44u29sm30m015n3"
      }
    });
  };



  console = () => {
    console.log(
      this.state.navItems,
      this.state.gamesId
      );
  };



  componentDidMount() {
    let navItems = [];
    let gamesId = [];

    //取得當前熱門的遊戲&id
    this.getGames().then(Res => {
      for (let i = 0; i < 5; i++) {
        navItems.push(Res.data.data[i].name);
        gamesId.push(Res.data.data[i].id);
      }
      this.setState({
        navItems,
        gamesId
      });
    });
    //============================================================================
  


  }

componentDidUpdate(){
  this.console();
}

  render() {
    return (
      <Div className="App">
        <Layout />
      </Div>
    );
  }
}

export default App;
