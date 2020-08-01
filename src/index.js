import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {observable, action} from  "mobx"
import {Provider} from "mobx-react"
const appState =observable({
  count:0,
  inc:action(()=>{
    appState.count +=1
  }),
  dec:action(()=>{
    appState.count -=1
  }),
  get  multiplyByThree(){
     return this.count*3
  },
  get multiplyByFour(){
    return this.count*4
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {appState} >
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
