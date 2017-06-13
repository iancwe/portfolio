import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './Project.css'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project: this.props.projects
    }
  }

  project (num) {
    console.log(num)
    this.setState({
      project: num
    })
  }

  render () {
    return (
      <div className='prcontainer'>
        <Grid>
          <Row>
            <h1>Projects</h1>
            <h2>{this.state.project}</h2>
          </Row>
          <Row className='projrw'>
            <Col md={6}>
              <div><img src='https://media.giphy.com/media/xUA7b3XfgxuPclK2bK/giphy.gif' alt='placeholder' onClick={() => this.project(1)} className='prgif' /><h3>Queries</h3></div>
            </Col>
            <Col md={6}>
              <div><img src='https://media.giphy.com/media/xUA7b2e234ByS8rUC4/giphy.gif' alt='placeholder' onClick={() => this.project(2)} className='prgif' /><h3>Scratch</h3></div>
            </Col>
          </Row>
          <Row className='projrw'>
            <Col md={6}>
              <div><img src='https://media.giphy.com/media/xUA7b5FtvmsehhJ7AA/giphy.gif' alt='placeholder' onClick={() => this.project(3)} className='prgif' /><h3>Cache</h3></div>
            </Col>
            <Col md={6}>
              <div><img src='https://media.giphy.com/media/xUA7aTomZO6j5KiAVO/giphy.gif' alt='placeholder' onClick={() => this.project(4)} className='prgif' /><h3>Datums?</h3></div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Projects
