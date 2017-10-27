import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { Button } from './components/Button';
import { DB_CONFIG } from './Config/config';
import workouts from './workouts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      workouts: workouts.workouts
    }
  }

  componentWillMount(){

  }


  render() {
    return (
      <div>
        <Header />
        <Main workouts={this.state.workouts}/>
        <Button />
        <Footer
          copyright = "&copy; 2017 Bolling Ball">
        </Footer>
      </div>
    );
  }
}

export default App;
