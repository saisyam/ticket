import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TicketHeader from './components/TicketHeader';
import { Route, Switch } from 'react-router-dom';
//import LandingPage from './content/LandingPage';
//import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TicketHeader />
        <Content>
        </Content>
      </>
    );
  }
}

export default App;