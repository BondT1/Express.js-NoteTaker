const db = require('../../db/db.json')
const ERouter = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

ERouter.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        res.send(data)
    })
})

ERouter.post('/api/notes', (req, res) => {
    let AddedNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.read('./db/db.json', (err, data) => {
        if (err) throw err;

        let addedData = JSON.parse(data);

        addedData.push(addedData);
        console.log(addedData)

        fs.writeFile('./db/db.json', JSON.stringify(addedData), (err) => {
            if (err) throw err;

            res.send('added successfully');
        })
    })
});

