import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import NavBar from '../navbar/navbar'
import Landing from '../landing/landing'
import Projects from '../projects/Projects'
import About from '../about/About'
import './App.css'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      project: 0
    }
  }

  render () {
    return (
      <div>
        <NavBar />
        <Landing />
        <hr />
        <ScrollableAnchor id={'ProjCont'}>
          <Projects projects={this.state.project} />
        </ScrollableAnchor>
        <hr />
        <ScrollableAnchor id={'AboutCont'}>
          <About />
        </ScrollableAnchor>
      </div>
    )
  }
}

export default App
