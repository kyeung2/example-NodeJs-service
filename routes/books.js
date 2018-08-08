const router = require('express').Router();
const  stubs = require('../stubs/stubs')


router.get('/', (req, res) => res.json([stubs.book1, stubs.book2, stubs.book3]))


module.exports = router