const express = require('express')
const  stubs = require("./stubs/Stubs")
const app = express()

app.get('/books', (req, res) => res.json([stubs.book1, stubs.book2, stubs.book3]))

app.listen(3000, () => console.log('Example app listening on port 3000!'))