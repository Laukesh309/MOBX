import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
import {observer,inject} from "mobx-react"

@inject("store")
@observer
class App extends Component{

  render(){
    console.log("this is store",this.props.store)
    return(
      <div>
        <div>
          <button onClick={()=>{
            this.props.store.addCounter()
            }}>addCounter</button>
          <button onClick={()=>{
            this.props.store.totalDeleteCount()
          }}>deleteCounter</button>
        </div>
        <div>
          {
            this.props.store.totalCounter.map((element,index)=>{
              console.log("\n\nelement",element)
              return (
                <div key ={index}>
                  <h1>{element}</h1>
                  <button onClick={(event)=>{
                    this.props.store.increament(event,index)
                    }}>increament</button>
                    <button onClick ={(event)=>{
                      this.props.store.decreament(event,index)
                    }}>decreament</button>
                    <button onClick ={(event)=>{
                      this.props.store.deleteCounter(event,index)
                    }}>deletecounter</button>
                  </div>
              )
            })
          }
      </div>
      </div>
     
    )
  }
}

export default App;
