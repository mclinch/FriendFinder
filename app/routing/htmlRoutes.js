
const router = require('express').Router();
const questions = require('./../data/questions.js')

router.get('/', (req, res) => res.render('home'));

router.get('/survey', (req, res) => res.render('survey', {questions,}))

module.exports = router;