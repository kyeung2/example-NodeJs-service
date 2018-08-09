const express = require('express');
const mongo = require('./modules/mongo');

const app = express();

app.use('/books', require('./routes/books'));

// connect to mongo
mongo.init();

// start listening to incoming requests
const server = app.listen(process.env.PORT || 3000,
  () => console.log(`libraryService started port:${server.address().port}`));
