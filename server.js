const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const router = require('express').Router();
const data = require('./db/db.json')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/notes', (req, res) => {
    let content = data;
    res.json(content);
});

app.listen(PORT, () => {
  console.log(`API Server situated on PORT: ${PORT}`)
})