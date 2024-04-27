const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3300;

// Middleware
app.use(bodyParser.json());

// Data (temporary, for demonstration)
let tasks = [];

// Routes
// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE a task by ID
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const axios = require('axios');

// GET all tasks
axios.get('http://localhost:3300/tasks')
  .then(response => {
    console.log('All tasks:', response.data);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });

// POST a new task
axios.post('http://localhost:3300/tasks', {
    id: 1,
    title: 'Task 1',
    description: 'This is task number 1'
  })
  .then(response => {
    console.log('POST Response:', response.data);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });

// DELETE a task by ID
axios.delete('http://localhost:3300/tasks/1')
  .then(response => {
    console.log('DELETE Response:', response.status);
  })
  .catch(error => {
    console.error('DELETE Error:', error);
  });
