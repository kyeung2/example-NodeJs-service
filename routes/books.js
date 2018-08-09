const router = require('express').Router();
const mongo = require('../modules/mongo');

router.get('/', (req, res) =>
    mongo.findAll()
        .then(
            (books) => res.json(books),
            (err) => res.status(400).json(err)
        ));

module.exports = router;