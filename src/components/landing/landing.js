import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'
import './landing.css'

class Landing extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pos: 0,
      subheader: [
        'Full Stack Developer',
        'Mechanical Engineer',
        'Wannabe Professional Gamer',
        'Chendol / Chicken Rice Aficionado',
        'Needs a Gymming Partner',
        'Avid Movegoer'
      ]
    }
    this.randheader = this.randheader.bind(this)
  }

  randheader () {
    if (this.state.pos < this.state.subheader.length - 1) {
      this.setState({
        pos: this.state.pos + 1
      })
    } else {
      this.setState({
        pos: 0
      })
    }
  }

  componentDidMount () {
    setInterval(this.randheader, 3000)
  }

  render () {
    return (
      <div>
        <Grid>
          <header>
            <Row>
              <h1>Ian Chong</h1>
              <h3>{this.state.subheader[this.state.pos]}</h3>
            </Row>
          </header>
        </Grid>
      </div>
    )
  }

}

export default Landing
