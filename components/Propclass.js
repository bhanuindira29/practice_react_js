import React, { Component } from 'react'

export class Propclass extends Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name}</h1>
      </div>
    )
  }
}

export default Propclass
