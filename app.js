const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('routes/index.js');

const app = express();

app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a'})
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 
app.use(indexRouter);

app.listen(80, 'localhost');