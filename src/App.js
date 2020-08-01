import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {observer , inject} from "mobx-react"


@inject("store")
@observer
class App extends Component{


  render(){

    return (
      <h1>this is the best</h1>
    )
  }
}

export default App;
