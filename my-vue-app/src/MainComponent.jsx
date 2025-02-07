import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Index.css'

function MainComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            this is my todo
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default MainComponent