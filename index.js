// const http = require('http');

// const server = http.createServer();
// server.on('connection', (socket => {
//    console.log('new connection');
// }));

// server.listen(3000);
// console.info('Server is running on port 3000');

// const http = require('http');

const express = require('express');
const questions = require('./questions').questions;
const servPort = require('./config');

const app = express();
app.get('/api/questions', (request, response) => {
    response.send(questions);
 });

 app.get('/api/questions/:id', (request, response) => {
    const questionId = parseInt(request.params.id);

    if (Number.isInteger(questionId) && questionId >= 0 && questionId < questions.length) {
        response.json(questions[questionId]);
    } else {
        response.status(404).json({ error: 'Question ' + questionId + ' not found' });
    }
});

app.listen(3000, function () {
 console.info(`Server is running at port 3000`);
});