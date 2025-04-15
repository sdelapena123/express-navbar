// server.js

const express = require("express");
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

const app = express();
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a'})

app.use(morgan('combined', { stream: accessLogStream}))


// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect('https://github.com/sdelapena123/climate-change')
  //TODO add code!
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect('https://github.com/sdelapena123/typesettingg')
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://github.com/sdelapena123/4-sorting-algorithms')
  //TODO add code
});

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('hello!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});