import React, { Component } from 'react'
import './About.css'
import {Grid, Row, Col, Form, FormGroup} from 'react-bootstrap'

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
              <a href='https://github.com/iancwe'><img src={require('../images/profpic2.png')} alt='Ian Chong' id='pp' /></a>
            </Col>
          </Row>
          <Row>
            <Col md={12} id='formspree'>
              <Form horizontal method='POST' action='https://formspree.io/crubbishhute@gmail.com'>
                <FormGroup >
                  <Col md={12}>
                    <label>Name</label>
                  </Col>
                  <Col md={12}>
                    <input type='text' name='name' placeholder='Morty Smith' className='input' />
                  </Col>
                </FormGroup>
                <FormGroup >
                  <Col md={12}>
                    <label>Email</label>
                  </Col>
                  <Col md={12}>
                    <input type='email' name='email' placeholder='morty@gmail.com' className='input' />
                  </Col>
                </FormGroup>
                <FormGroup >
                  <Col md={12}>
                    <label>Subject</label>
                  </Col>
                  <Col md={12}>
                    <input type='text' name='subject' placeholder='Sky Color' className='input' />
                  </Col>
                </FormGroup>
                <FormGroup >
                  <Col md={12}>
                    <label>Email</label>
                  </Col>
                  <Col md={12}>
                    <textarea name='message' placeholder='Your message' rows='4' className='input' />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <button type='submit'>Send</button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default About
