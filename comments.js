// Create web server
// 1. Create a web server
// 2. Read the list of comments from the comments.json file
// 3. Return the list of comments to the client
// 4. Add a new comment to the list
// 5. Write the list of comments back to the comments.json file

// 1. Create a web server
const express = require('express');
const server = express();
server.listen(3000);

// 2. Read the list of comments from the comments.json file
const fs = require('fs');
let comments = JSON.parse(fs.readFileSync('comments.json'));

// 3. Return the list of comments to the client
server.get('/comments', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
});

// 4. Add a new comment to the list
server.post('/comments', (req, res) => {
    let comment = req.query;
    comments.push(comment);
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
});

// 5. Write the list of comments back to the comments.json file
server.on('close', () => {
    fs.writeFileSync('comments.json', JSON.stringify(comments));
});