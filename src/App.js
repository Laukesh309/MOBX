import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from "mobx-react"


@observer
class App extends Component{
  
  
  
  render(){
    console.log("this is app install",this.props)
    return(
      <div>
        <h1>{this.props.appState}</h1>
      </div>
      
    )
  }
}

export default App;
