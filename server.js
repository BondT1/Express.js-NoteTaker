// const api = require('./routes/api');
// const html = require('./routes/html');

// app.use('/api', api);
// app.use('/', html);


// app.listen(PORT, () => {
//     console.log(`API Server situated on PORT: ${PORT}`)
// })

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const router = require('express').Router();
let { array } = require('./db/db.json');

console.log(array);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// app.get('/api/notes', (req, res) => {
//   res.json('notes')
// })

app.get('/api/notes', (req, res) => {
    let content = array;
    res.json(content);
});

app.listen(PORT, () => {
  console.log(`API Server situated on PORT: ${PORT}`)
})


// app.post('/api/notes', (req, res) => {
//     req.body.id = generateUniqueId();
//     const note = createNote(req.body, notes);
//     res.json(note);
//   });

// router.get('*', (req, res) => {
//      res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

// const { createNote, deleteNote } = require('./lib/createNotes');
