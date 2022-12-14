const router = require('express').Router();
const { create } = require('../../lib/createNotes');
let { array } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let content = array;
    res.json(content);
});

router.post('/notes', (req, res) => {
    if(array) {
        req.body.id = array.length.toString();
    } else {
        req.body.id = 0}
    res.json(create(req.body, array));
});

