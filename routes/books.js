const router = require('express').Router();
const mongo = require('../modules/mongo');

router.get('/', (req, res) => mongo.findAll((err, books) => {
  if (err) res.status(400).send(err);
  res.json(books);
}));

module.exports = router;
