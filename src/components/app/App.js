import React, { Component } from 'react'
import NavBar from '../navbar/navbar'
import About from '../about/About'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <About />
      </div>
    )
  }
}

export default App
