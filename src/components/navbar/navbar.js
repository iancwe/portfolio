import React, { Component } from 'react'
import './navbar.css'

class NavBar extends Component {

  render () {
    return (
      <div className='container'>
        <div className='logo'>
          <h1>Ian Chong</h1>
        </div>
        <div className='nav'>
          <span>About</span>
          <span>Work</span>
        </div>
      </div>
    )
  }

}

export default NavBar
