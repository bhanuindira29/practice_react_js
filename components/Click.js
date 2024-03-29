import React, { Component } from 'react'
import UpdateComp from './HigherOrder'

export class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    updateclick=()=>{
        this.setState({count:this.state.count+1})
    } 
  render() {
    const { count }=this.state
    return (
      <div>
        <button onClick={this.updateclick}>{this.props.name}clicked {count} time</button>
      </div>
    )
  }
}

export default UpdateComp(Click)
