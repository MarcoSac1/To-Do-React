import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './index.css';

function HeaderComponent() {
  return (
    <Nav className='Nav' fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <h1>To-Do</h1>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/completed">Completed Task</Nav.Link>
      </Nav.Item>
  </Nav>
);
}

export default HeaderComponent