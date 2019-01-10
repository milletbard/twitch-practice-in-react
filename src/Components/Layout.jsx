import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import GamePage from "./GamePage/GamePage";
import Footer from "./Footer/Footer";
import { getGames, getCurrentStreams, getUsers } from './Api'
// import TravelCards from "./Travel/TravelCards";
/**
 * The main App component
 */
class Layout extends Component {
  state = {
    navItems: [],
    gamesIds: [],
    currentTab: 0,
    currentStreams: [],
    error: false
  };

  onNavChange = currentTab => {
    this.setState({ currentTab });
  }

  updateStream = () => {
    const { gamesIds, currentTab } = this.state;
    let currentStreams = [];
    let userIds = [];
    getCurrentStreams(gamesIds[currentTab])
      .then(StreamsResponse => {
        currentStreams = StreamsResponse.data.data;
        for (let i = 0; i < currentStreams.length; i++) {
          userIds.push(currentStreams[i].user_id);
        }
        return getUsers(userIds);
      })
      .then(usersResponse => {
        const users = usersResponse.data.data;
        for (let i = 0; i < users.length; i++) {
          currentStreams[i].userInfo = users[i];
          currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`
        }
        this.setState({ currentStreams });
      }).catch(error => {
        this.setState({ error: true })
      })
  }

  componentDidMount() {
    let navItems = [];
    let gamesIds = [];

    //===============================================================取得當前5個熱門的遊戲&id
    getGames()
      .then(gameResponse => {
 
        for (let i = 0; i < 5; i++) {
          navItems.push(gameResponse.data.data[i].name);
          gamesIds.push(gameResponse.data.data[i].id);
        }
        this.setState({
          navItems,
          gamesIds
        })
      }).then(() => {
        this.updateStream();
      }).catch(error => {
        this.setState({
          error: true
        })
      })
  }



  //   getGames()
  //     .then(gameResponse => {
  //       for (let i = 0; i < 5; i++) {
  //         navItems.push(gameResponse.data.data[i].name);
  //         gamesIds.push(gameResponse.data.data[i].id);
  //       }
  //       this.setState({
  //         navItems,
  //         gamesIds
  //       })
  //       return getCurrentStreams(gamesIds[0]);
  //     })
  //     .then(StreamsResponse => {
  //       currentStreams = StreamsResponse.data.data;
  //       for (let i = 0; i < currentStreams.length; i++) {
  //         userIds.push(currentStreams[i].user_id);
  //       }
  //       return getUsers(userIds);
  //     })
  //     .then(usersResponse => {
  //       const users = usersResponse.data.data;
  //       for (let i = 0; i < users.length; i++) {
  //         currentStreams[i].userInfo = users[i];
  //         currentStreams[i].url = `https://www.twitch.tv/${users[i].login}`
  //       }
  //       this.setState({ currentStreams });
  //     }).catch(error => {
  //       // console.log(error)
  //       this.setState({
  //         error: true
  //       })
  //     })
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTab !== this.state.currentTab) {
     
      this.setState({ 
        currentStreams: [],
        currentTab: this.state.currentTab
      });
      this.updateStream();
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
