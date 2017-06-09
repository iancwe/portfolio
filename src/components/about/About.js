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
              <p>Heyo! After tinkering about as an engineer and getting a taste of coding in college, I was immediately hooked. And that was just the start of my web development journey! Whenever I am not coding away at my computer, I am mostly still sitting a the computer playing video games or playing board games with the friends! Maybe I should try implemating some gymming to get my intake of cardio... But eventually, I hope to lend some my ideas to bridge physical problems with web solutions.</p>
              <Row className='contactrow'>
                <a href='mailto:crubbishhute@gmail.com'><i className='fa fa-envelope-o fa-3x' aria-hidden='true' /></a>
                <a href='https://github.com/iancwe'><i className='fa fa-github-square fa-3x' aria-hidden='true' /></a>
                <a href='https://www.linkedin.com/in/ian-c-064734144/'><i className='fa fa-linkedin-square fa-3x' aria-hidden='true' /></a>
              </Row>
              <Row className='skillIcons'>
                <i className='devicon-html5-plain-wordmark colored' />
                <i className='devicon-css3-plain-wordmark colored' />
                <i className='devicon-javascript-plain colored' />
                <i className='devicon-nodejs-plain colored' />
                <i className='devicon-mongodb-plain colored' />
                <i className='devicon-postgresql-plain colored' />
                <i className='devicon-ruby-plain colored' />
                <i className='devicon-rails-plain colored' />
              </Row>
            </Col>
            <Col md={6}>
              <a href='https://github.com/iancwe'><img src={require('../images/profilepic2.png')} alt='profile picture' id='pp' /></a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default About
