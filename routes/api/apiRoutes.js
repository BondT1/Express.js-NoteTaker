const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/createNotes');
let { array } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let content = array;
    res.json(content);
});

router.post('/api/notes', (req, res) => {
    if(array) {
        req.body.id = array.length.toString();
    } else {
        req.body.id = 0}
    res.json(create(req.body, array));
});

// create deleteNote function