const ERouter = require('express').Router();
const path = require('path');

ERouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
ERouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

module.exports = ERouter;