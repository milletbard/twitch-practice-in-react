import React, { Component } from "react";

import axios from "axios";
import Header from "./Navbar/Navbar";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

// import TravelCards from "./Travel/TravelCards";
/**
 * The main App component
 */
class Layout extends Component {

  state = {
    navs: [],
    gameIds: [],
    currentTab: 0,
    currentStreams: []
  }

  onNavChange = currentTab => {
    this.setState({ currentTab });
  }

  getGames = () => {
    return axios.get('https://api.twitch.tv/helix/games/top?first=5', {
      headers: {
        'Client-ID': 'jdsl3lgf1c8gcxi44u29sm30m015n3'
      }
    })
  }

  getCurrentStreams = gameID => {
    return axios.get(`https://api.twitch.tv/helix/streams?game_id=${gameID}&first=24`, {
      headers: {
        'Client-ID': 'jdsl3lgf1c8gcxi44u29sm30m015n3'
      }
    })
  }

  getUsers = userIds => {
    let url = `https://api.twitch.tv/helix/users?id=${userIds[0]}`;
      for (let i = 1; i < userIds.length; i++) {
        url += `&id=${userIds[i]}`;
      }

    return axios.get(url, {
      headers: {
        'Client-ID': 'jdsl3lgf1c8gcxi44u29sm30m015n3'
      }
    })
  }

  componentDidMount() {
    let navs = [];
    let gameIds = [];
    let currentStreams = [];
    let userIds = [];

    this.getGames()
    .then(gameResponse => {
      for (let i = 0; i < 5; i++) {
        navs.push(gameResponse.data.data[i].name);
        gameIds.push(gameResponse.data.data[i].id);
      }
      this.setState({
        navs,
        gameIds
      });
      return this.getCurrentStreams(gameIds[0]);
    })
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

        <Header />
        <Section />>        
        <Footer />>
        </div> 
    
    );
  }
}

export default Layout;
