const express = require('express')
const app = express()
const db = require('./db')
const ScoreController = require('./scores/ScoreController')

app.use('/scores', ScoreController)

module.exports = app