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

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// router.get('*', (req, res) => {
//      res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

app.get('/api/notes', (req, res) => {
  res.json('notes')
})

app.listen(PORT, () => {
  console.log(`API Server situated on PORT: ${PORT}`)
})