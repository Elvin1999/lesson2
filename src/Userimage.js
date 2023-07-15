import React, { Component } from 'react'

export default class Userimage extends Component {
  render() {
    return (
      <div style={{
        border:"2px solid black",
        padding:"20px",
        width:'50%',
        marginTop:"50px"
      }}>
        <h1>User Info</h1>
        <h3><b>{this.props.name}</b></h3>
        <img style={{width:'30%'}} src={this.props.avatar} alt='actor'></img>
      </div>
    )
  }
}
