const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

const api = require('./routes/api');
const html = require('./routes/html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', api);
app.use('/', html);


app.listen(PORT, () => {
    console.log(`API Server situated on PORT: ${PORT}`)
})