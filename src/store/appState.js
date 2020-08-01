
import {observable,action} from "mobx"

const appState = observable({
        count:0,
    totalCounter : [],

    addCounter:action("counterIncreament",()=>{
        appState.totalCounter.push(appState.count)
    }),
    increament:action("increament",(event,index)=>{
        //console.log("\n\n appState.counter",appState.totalCounter)
        //console.log("this is increament index",index)
        
       appState.totalCounter[index] +=1
    }),
    decreament:action("decreament",(event,index)=>{
        //console.log("this is decreamented index",index)
        appState.totalCounter[index] -=1
    }),
    deleteCounter:action("deleted Counter",(event,index)=>{
        appState.totalCounter.splice(index,1)
    }),
    totalDeleteCount:action("totalCounterDelete",(event,index)=>{
        appState.totalCounter =[]
    })
})

export default appState