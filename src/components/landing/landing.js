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
    setInterval(this.randheader, 4000)
  }

  render () {
    document.addEventListener('DOMContentLoaded', function (event) {
      setTimeout(() => {
        let element = document.querySelector('.name')
        element.classList.add('fadeshow')
      }, 800)
      setTimeout(() => {
        let subheaderfade = document.querySelector('.subhead')
        subheaderfade.classList.add('fadeshow')
      }, 1500)
      setTimeout(() => {
        let scrollshow = document.querySelector('.scroll')
        scrollshow.classList.add('fadeshow')
      }, 2200)
      setTimeout(() => {
        let iconshow = document.querySelector('.fa')
        iconshow.classList.add('fadeshow')
      }, 3000)
    })
    return (
      <div className='wrapper'>
        <Grid>
          <header>
            <Row>
              <h1 className='name'>Ian Chong</h1>
              <h3 className='subhead'>{this.state.subheader[this.state.pos]}</h3>
            </Row>
            <Row>
              <div>
                <br />
                <p className='scroll'>Scroll for More</p>
                <i className='fa fa-angle-down' aria-hidden='true' />
              </div>
            </Row>
          </header>
        </Grid>
      </div>
    )
  }

}

export default Landing
