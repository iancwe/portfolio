import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <hr />
        <Grid>
          <Row>
            <Col md={4} mdOffset={4} id='tplink'>
              <a href='#top'>Back to Top</a>
            </Col>
            <Col md={4} id='copyright'>
              <h4>© Ian Chong</h4>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer
