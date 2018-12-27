import React, { Component } from 'react';
import Layout from '../Components/Layout';
import Styled from 'styled-components';
import './App.css';

const Div =Styled.div`
    background-image: url(https://i.imgur.com/oAf6eLy.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
`;
  
class App extends Component {


  




  render() {
    return (
      <Div className="App" >
      <Layout />
      </Div>
    );
  }
}

export default App;
