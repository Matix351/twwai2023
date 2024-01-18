const express = require('express');
const config = require('./config').config;

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (request, response) => {
//    response.send('Serwer działa!');
// });

// let chart1 = {"type":"line","data":{"labels":["January","February","March","April","May","June"],"datasets":[{"label":"My First dataset","backgroundColor":"rgb(255, 99, 132)","borderColor":"rgb(255, 99, 132)","data":[0,10,5,2,20,30,45]}]},"options":{}};


app.get('/', (request, response) => {
    response.render(__dirname + '/index.html',  {subject: 'Technologie webowe w aplikacjach Internetu'}
    )
 }),
 

app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});
