import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Index.css'

function MainComponent() {
  return (
    <Container className='container'>
      <Row>
        <Col className='bg-primary'>
        <h1>
            this is my todo
        </h1>
        <section>
          <input type="text" placeholder='Insert here Your ToDo' />
          <button type="button">Add To the list</button>
        </section>
        <div >
          <ul>
            <li>
              fare spesa
              <button className='delete' type="button">Delete</button>
            </li>
            <li>
              portare il Cane fuori 
              <button className='delete' type="button">Delete</button>

            </li>
            <li>
              Lunedì ore 13:30 Piscina
              <button className='delete' type="button">Delete</button>
            </li>
          </ul>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MainComponent