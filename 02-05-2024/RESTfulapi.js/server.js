const express = require('express');
const app = express();
const PORT = 3000;

// Dummy data (replace this with a database)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.use(express.json());

// Get all users
app.get('/api/users', (req, res) => {
    console.log('GET/api/users')
    res.json(users);
});

// Get a specific user by ID
app.get('/api/users/:id', (req, res) => {
    console.log(`GET/api/users/${req.params.id}`)
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
    console.log('POST/api/users')
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update an existing user
app.put('/api/users/:id', (req, res) => {
    console.log(`POST/api/users/${req.params.id}`)
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    console.log('DELETE/api/users')
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`express server is waiting for client connections`);
});