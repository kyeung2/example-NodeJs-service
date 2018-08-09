const mongoose = require('mongoose');
const stubs = require('../stubs/stubs');


function init() {
  mongoose.connect('mongodb://localhost:27017/library')
    .then(
      () => {
        console.info('Mongo connection success');
        Book.remove().then(
          () => {
            console.info('Book collection dropped');
            new Book(stubs.book1).save().then(book => console.info(`book added to DB: ${book.title}`));
            new Book(stubs.book2).save().then(book => console.info(`book added to DB: ${book.title}`));
            new Book(stubs.book3).save().then(book => console.info(`book added to DB: ${book.title}`));
          },
          error => console.error('Error dropping collection Book :', error),
        );
      },
      error => console.error('Mongo connection error:', error),
    );
}

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genre: String,
  isbn: String,
});


const Book = mongoose.model('Book', bookSchema);


module.exports = {
  init,
  findAll: cb => Book.find(cb),
};
