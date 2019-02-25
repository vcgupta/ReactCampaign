import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CampaignList from './Campaigns/CampaignList';
import AddForm from './Campaigns/AddCampaign.tsx';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
 
  render() {
    return (
      <div className="App">
      <div className="app-left">
        <h2>Campaigns: </h2>
        <CampaignList />
        </div>
        <div className="app-right">
          <h2>Add Campaign</h2>
          <AddForm />
        </div>
      </div>
    );
  }
}

export default App;
