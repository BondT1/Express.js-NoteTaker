const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('routes/api/index.js');
app.use('routes/html/index.js');


app.listen(PORT, () => {
    console.log(`API Server situated on PORT: ${PORT}`)
})