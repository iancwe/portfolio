import React, { Component } from 'react'
import './navbar.css'

class NavBar extends Component {

  render () {
    return (
      <div className='nvcontainer'>
        <div className='logo'>
          <h1 id='logoimage'>Ian Chong</h1>
        </div>
        <div className='nav'>
          <span><a href='#ProjCont'>Projects</a></span>
          <span><a href='#AboutCont'>About</a></span>
        </div>
      </div>
    )
  }

}

export default NavBar
