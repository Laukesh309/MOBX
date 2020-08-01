import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer,inject} from "mobx-react"
import Second from "./second"


@inject("store")
@observer
class App extends Component{
  
  
  
  render(){
    console.log("this is app install",this.props)
    return(
      <div>
        <h1>{this.props.store.count}</h1>
        <button onClick={this.props.store.inc}>increament</button>
        <button onClick ={this.props.store.dec}>decrement</button>
        <div>
          <h1>multiply by 3 ...{this.props.store.multiplyByThree}</h1>
           <h1>multiply by 4 ...{this.props.store.multiplyByFour}</h1>
        </div>
        <Second/>
      </div>
      
    )
  }
}

export default App;
