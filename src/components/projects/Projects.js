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
    this.setState({
      project: num
    })
  }

  back () {
    this.setState({
      project: 0
    })
  }

  render () {
    if (this.state.project === 1) {
      return (
        <div className='prcontainer'>
          <Grid>
            <Row>
              <h1>Queries</h1>
            </Row>
            <Row id='projab'>
              <Col md={6}>
                <div><img src='https://media.giphy.com/media/xUA7b3XfgxuPclK2bK/giphy.gif' alt='project1' className='aboutimg' /></div>
              </Col>
              <Col md={6}>
                <div><h3>When knowledge mingles with gambling.</h3></div>
                <div><p>What happens when you get a cultured game like a quiz and taint it with some vices...Eh quizzes can't really drink but it sure can be the new hot bed for renaissance people to gamble at! Well on the facade it just a normal wholesome trivia quiz game, but in the deep bowls of it lurks the hustler that the quiz always wanted to be. Just remember Hustle hard!</p></div>
                <div>
                  Built With:
                  <i className='devicon-html5-plain icons' />
                  <i className='devicon-css3-plain icons' />
                  <i className='devicon-javascript-plain icons' />
                </div>
              </Col>
              <a href='https://iancwe.github.io/Queries/' className='links' target='_blank'><i className='fa fa-desktop fa-1x' aria-hidden='true' />Live Website</a>
              <a href='https://github.com/iancwe/Queries' className='links' target='_blank'><i className='fa fa-github-square fa-1x' aria-hidden='true' />Check Out Codes</a>
            </Row>
            <Row>
              <a onClick={() => this.back()}>Back to List</a>
            </Row>
          </Grid>
        </div>
      )
    } else if (this.state.project === 2) {
      return (
        <div className='prcontainer'>
          <Grid>
            <Row>
              <h1>Scratch</h1>
            </Row>
            <Row id='projab'>
              <Col md={6}>
                <div><img src='https://media.giphy.com/media/xUA7b2e234ByS8rUC4/giphy.gif' alt='project1' className='aboutimg' /></div>
              </Col>
              <Col md={6}>
                <div><h3>Risk comes from not knowing what you're doing</h3></div>
                <div><p>This application allows users to learn from the best or better traders.Like the saying goes "Imitation is the sincerest form of flattery-Charles Caleb Colton" However that is not all the Scratch can offer, it also keeps track of your current portfolio and shows you how much money you earned or lose...So with this app I believe that one can improve or just learn the ropes of trading.</p></div>
                <div>
                  Built With:
                  <i className='devicon-html5-plain icons' />
                  <i className='devicon-css3-plain icons' />
                  <i className='devicon-express-original icons' />
                  <i className='devicon-mongodb-plain icons' />
                </div>
              </Col>
              <a href='https://scrbk.herokuapp.com/' className='links' target='_blank'><i className='fa fa-desktop fa-1x' aria-hidden='true' />Live Website</a>
              <a href='https://github.com/iancwe/Scratch' className='links' target='_blank'><i className='fa fa-github-square fa-1x' aria-hidden='true' />Check Out Codes</a>
            </Row>
            <Row>
              <a onClick={() => this.back()}>Back to List</a>
            </Row>
          </Grid>
        </div>
      )
    } else if (this.state.project === 3) {
      return (
        <div className='prcontainer'>
          <Grid>
            <Row>
              <h1>Cache</h1>
            </Row>
            <Row id='projab'>
              <Col md={6}>
                <div><img src='https://media.giphy.com/media/xUA7b5FtvmsehhJ7AA/giphy.gif' alt='project1' className='aboutimg' /></div>
              </Col>
              <Col md={6}>
                <div><h3>Youth Finance Saving Solution</h3></div>
                <div><p>We created Cache as a way for savers to earn a very high risk-free return, like interest from a bank savings account. Except that "interest" comes in the form of rewards from consumer partners that want younger consumers to come through their doors. People in our plan can earn as much as 12% on each dollar they save over the course of a year! And we even given them 25% of those savings in cash back!
                </p></div>
                <div>
                  Built With:
                  <i className='devicon-html5-plain icons' />
                  <i className='devicon-css3-plain icons' />
                  <i className='devicon-rails-plain icons' />
                  <i className='devicon-postgresql-plain icons' />
                </div>
              </Col>
              <a href='http://cachesg.herokuapp.com/' className='links' target='_blank'><i className='fa fa-desktop fa-1x' aria-hidden='true' />Live Website</a>
              <a href='https://github.com/iancwe/cache' className='links' target='_blank'><i className='fa fa-github-square fa-1x' aria-hidden='true' />Check Out Codes</a>
            </Row>
            <Row>
              <a onClick={() => this.back()}>Back to List</a>
            </Row>
          </Grid>
        </div>
      )
    } else if (this.state.project === 4) {
      return (
        <div className='prcontainer'>
          <Grid>
            <Row>
              <h1>Datums?</h1>
            </Row>
            <Row id='projab'>
              <Col md={6}>
                <div><img src='https://media.giphy.com/media/xUA7aTomZO6j5KiAVO/giphy.gif' alt='project1' className='aboutimg' /></div>
              </Col>
              <Col md={6}>
                <div><h3>The ball is round, the game lasts ninety minutes, and everything else is just theory</h3></div>
                <div><p>Well, most people who are avid football fans might have heard of this quote before. I believe in it to a certain extend...however statistic and history always comes back and bite us in the bum. So lets hope with mathematics on our side we can foretell the games and prove that saying a little wrong.</p></div>
                <div>
                  Built With:
                  <i className='devicon-react-original icons' />
                  <i className='devicon-html5-plain icons' />
                  <i className='devicon-css3-plain icons' />
                  <i className='devicon-javascript-plain icons' />
                </div>
              </Col>
              <a href='https://datumfut.herokuapp.com/' className='links' target='_blank'><i className='fa fa-desktop fa-1x' aria-hidden='true' />Live Website</a>
              <a href='https://github.com/iancwe/parlay' className='links' target='_blank'><i className='fa fa-github-square fa-1x' aria-hidden='true' />Check Out Codes</a>
            </Row>
            <Row>
              <a onClick={() => this.back()}>Back to List</a>
            </Row>
          </Grid>
        </div>
      )
    }
    return (
      <div className='prcontainer'>
        <Grid>
          <Row>
            <h1 id='projtitle'>Projects</h1>
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
