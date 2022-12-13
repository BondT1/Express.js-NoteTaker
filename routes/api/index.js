const db = require('../../db/db.json')
const ERouter = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

ERouter.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        res.send(data)
    })
})

ERouter.post('/notes', (req, res) => {
    let addedNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.read('./db/db.json', (err, data) => {
        if (err) throw err;

        let addedData = JSON.parse(data);

        addedData.push(addedNote);
        console.log(addedData)

        fs.writeFile('./db/db.json', JSON.stringify(addedData), (err) => {
            if (err) throw err;

            res.send('added successfully');
        })
    })
});

module.exports = ERouter;
