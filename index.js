const express = require('express');

const app = express();

app.use('/books', require('./routes/books'));

const server = app.listen(process.env.PORT || 3000,
  () => console.log(`Example app listening on port:${server.address().port}`));
