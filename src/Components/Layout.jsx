import React, { Component } from "react";

import axios from "axios";
import Navbar from "./Navbar/Navbar";
import GamePage from "./GamePage/GamePage";
import Footer from "./Footer/Footer";

// import TravelCards from "./Travel/TravelCards";
/**
 * The main App component
 */
class Layout extends Component {
  state = {
    navItems: [],
    gamesId: [],
    currentStreams: []
  };

  getGames = () => {
    return axios.get("https://api.twitch.tv/helix/games/top?first=5", {
      headers: {
        "Client-ID": "jdsl3lgf1c8gcxi44u29sm30m015n3"
      }
    });
  };

  getCurrentStreams = gameID => {
    return axios.get(
      `https://api.twitch.tv/helix/streams?game_id=${gameID}&first=24`,
      {
        headers: {
          "Client-ID": "jdsl3lgf1c8gcxi44u29sm30m015n3"
        }
      }
    );
  };
  getUsers = userIds => {
    let url = `https://api.twitch.tv/helix/users?id=${userIds[0]}`;
    for (let i = 1; i < userIds.length; i++) {
      url += `&id=${userIds[i]}`;
    }

    return axios.get(url, {
      headers: {
        "Client-ID": "jdsl3lgf1c8gcxi44u29sm30m015n3"
      }
    });
  };

  console = () => {
    console.log();
  };

  componentDidMount() {
    let navItems = [];
    let gamesIds = [];
    let currentStreams = [];
    let userIds = [];
    //===============================================================取得當前5個熱門的遊戲&id
    this.getGames()
      .then(gameResponse => {
        for (let i = 0; i < 5; i++) {
          navItems.push(gameResponse.data.data[i].name);
          gamesIds.push(gameResponse.data.data[i].id);
        }
        return this.getCurrentStreams(gamesIds[0]);
      })
      .then(StreamsResponse => {
        currentStreams = StreamsResponse.data.data;
        for (let i = 0; i < currentStreams.length; i++) {
          userIds.push(currentStreams[i].user_id);
        }
        return this.getUsers(userIds);
      })
      .then(usersResponse => {
        const users = usersResponse.data.data;
        for(let i = 0; i < users.length; i++){
          currentStreams[i].userInfo = users[i]; 
          currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`  
        }
        this.setState({ currentStreams });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentTab } = this.state; 
    const gameIds = [...this.state.gameIds];
    let currentStreams = [];
    let userIds = [];

    if (prevState.currentTab !== currentTab) {
      this.setState({ currentStreams });
      this.getCurrentStreams(gameIds[currentTab])
      .then(streamResponse => {
        currentStreams = streamResponse.data.data;
        for (let i = 0; i < currentStreams.length; i++) {
          userIds.push(currentStreams[i].user_id);
        }
        return this.getUsers(userIds);
      })
      .then(userResponse => {
        const users = userResponse.data.data;
        for (let i = 0; i < users.length; i++) {
          currentStreams[i].userInfo = users[i];
          currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`
        }
        this.setState({ currentStreams });
      })
    }
  }
  
  render() {
    return (
      <div>
        <Navbar navItems={this.state.navItems} gamesId={this.state.gamesId} />
        <GamePage />>
        <Footer />>
      </div>
    );
  }
}

export default Layout;
