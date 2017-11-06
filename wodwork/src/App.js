import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { Button } from './components/Button';
import {workouts, exerciseLibrary} from './workouts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      workouts,
      exerciseLibrary
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main workouts={this.state.workouts} exerciseLibrary={this.state.exerciseLibrary}/>
        <Button />
        <Footer
          copyright = "&copy; 2017 Bolling Ball">
        </Footer>
      </div>
    );
  }
}

export default App;
