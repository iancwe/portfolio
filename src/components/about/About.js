import React, { Component } from 'react'
import './About.css'
import {Grid, Row, Col} from 'react-bootstrap'

class About extends Component {

  render () {
    return (
      <div className='abcontainer'>
        <Grid>
          <Row>
            <Col md={6}>
              <h1 className='ColHeader'>Heyo!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href='mailto:crubbishhute@gmail.com'><i className='fa fa-envelope-o fa-3x' aria-hidden='true' /></a>
              <a href='https://github.com/iancwe'><i className='fa fa-github-square fa-3x' aria-hidden='true' /></a>
              <a href='https://www.linkedin.com/in/ian-c-064734144/'><i className='fa fa-linkedin-square fa-3x' aria-hidden='true' /></a>
            </Col>
            <Col md={6}>
              <a href='https://github.com/iancwe'><img src={require('../images/profilepic2.png')} alt='profile picture' id='pp' /></a>
            </Col>
          </Row>
          <Row>
            <h1>More stuff</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default About
