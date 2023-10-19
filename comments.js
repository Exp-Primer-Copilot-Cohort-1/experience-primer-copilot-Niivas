const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.send('Comment added successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
