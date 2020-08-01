import React, { Component } from 'react'
import {inject,observer} from "mobx-react"

@inject("store")
@observer
class Second extends Component{


    render(){
        return(
        <h2> this is second component {this.props.store.count}</h2>
        )
    }
}

export  default Second