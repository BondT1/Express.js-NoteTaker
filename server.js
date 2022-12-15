const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const router = require('express').Router();
const data = require('./db/db.json');
const uniqueId = require('generate-unique-id');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function createNote(body, data) {
    const note = body;
    data.push(note);
    fstat.writeFileSync(
        path.join(__dirname, './db/db.json')
    )
    return note;
}

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/api/notes', (req, res) => {
    let content = data;
    res.json(content);
});

app.post('/api/notes', (req, res) => {
    req.body.id = uniqueId();
    const noteCreate = createNote(req.body, data);
    res.json(noteCreate)
});

app.listen(PORT, () => {
  console.log(`API Server situated on PORT: ${PORT}`)
})