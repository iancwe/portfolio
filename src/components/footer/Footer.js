import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './Footer.css'

const Footer = ({props}) => {
  return (
    <div className='footer'>
      <hr />
      <Grid>
        <Row>
          <Col md={12}>
            <h4 id='copyright'>© Ian Chong</h4>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Footer
