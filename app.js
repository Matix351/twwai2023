const express = require('express');
const config = require('./config').config; // dodając tę linię, trzeba pamiętać o stworzeniu pliku config.js

const app = express();

app.get('/', (request, response) => {
   response.send('Serwer działa!');
});

app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});
