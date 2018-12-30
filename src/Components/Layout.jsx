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
    gamesIds: [],
    currentStreams: [],
    error: false
  };

  onNavChange = currentTab => {
    this.setState({ currentTab });
  }
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
        this.setState({
          navItems,
          gamesIds
        })
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
        for (let i = 0; i < users.length; i++) {
          currentStreams[i].userInfo = users[i];
          currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`
        }
        this.setState({ currentStreams });
      }).catch(error => {
        // console.log(error)
        this.setState({
          error: true
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentTab } = this.state;
    const gamesIds = [...this.state.gamesIds]
    let currentStreams = [];
    let userIds = [];
    if (prevState.currentTab !== currentTab) {
      console.log(gamesIds);
      this.setState({ currentStreams });
      this.getCurrentStreams(gamesIds[currentTab])
        .then(StreamsResponse => {
          currentStreams = StreamsResponse.data.data;
          for (let i = 0; i < currentStreams.length; i++) {
            userIds.push(currentStreams[i].user_id);
          }
          return this.getUsers(userIds);
        })
        .then(usersResponse => {
          const users = usersResponse.data.data;
          for (let i = 0; i < users.length; i++) {
            currentStreams[i].userInfo = users[i];
            currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`
          }
          this.setState({ currentStreams });
        }).catch(error => {
          // console.log(error)
          this.setState({ error: true })
        })
    }
  }

  render() {
    const { navItems, currentTab, currentStreams, error } = this.state;

    return (
      <div>

        <Navbar
          navItems={navItems}
          currentTab={currentTab}
          onChange={this.onNavChange}

        />
        <GamePage
          navItems={navItems}
          currentTab={currentTab}
          currentStreams={currentStreams}
          error={error}
        />
        <Footer />>
      </div>
    );
  }
}

export default Layout;
