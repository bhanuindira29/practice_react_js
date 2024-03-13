import React, { Component } from 'react'
import UpdateComp from './HigherOrder'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    mousetouch=()=>{
        this.setState({count:this.state.count+1})
    }
    
  render() {
    const {count}=this.state
    return (
      <div>
        <button onMouseEnter={this.mousetouch}>{this.props.name} Increment {count}</button>
      </div>
    )
  }
}

export default UpdateComp(Counter)
