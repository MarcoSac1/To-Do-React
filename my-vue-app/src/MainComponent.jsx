import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Index.css';

function MainComponent() {
  const [tasks, setTasks] = useState([
    { text: 'Studia Meglio JS', completed: false },
    { text: "Esponi l'API di GitHub", completed: false },
    { text: 'Usa un proxy', completed: false }
  ]);
  
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks(prev => [...prev, { text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }

  function toggleTaskCompletion(index) {
    setTasks(prev =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // 🔹 Filtra le task completate
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Container className="container">
      <Row>
        <Col className="bg-primary">
          <h1>This is my ToDo</h1>
          <section>
            <input
              type="text"
              placeholder="Insert here Your ToDo"
              value={newTask}
              onChange={handleInputChange}
            />
            <button className="addButton" type="button" onClick={addTask}>
              Add task
            </button>
          </section>
          <div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  <span className="text">{task.text}</span>
                  <button className="complete" onClick={() => toggleTaskCompletion(index)}>
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button className="delete" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainComponent;