import React, { Component } from 'react'
import './navbar.css'

class NavBar extends Component {

  render () {
    document.addEventListener('DOMContentLoaded', function (event) {
      setTimeout(() => {
        let element = document.querySelector('.nvcontainer')
        element.classList.add('fadeshow')
      }, 200)
    })
    return (
      <div className='nvcontainer'>
        <div className='logo'>
          <h1 id='logoimage'>Iancwe</h1>
        </div>
        <div className='nav'>
          <span><a href='#ProjCont' className='links'>Projects</a></span>
          <span><a href='#AboutCont' className='links'>About</a></span>
        </div>
      </div>
    )
  }

}

export default NavBar
