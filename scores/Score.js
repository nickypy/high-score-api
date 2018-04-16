const mongoose = require('mongoose')
const ScoreSchema = new mongoose.Schema({
    name: String,
    score: Number,
    date: Date
})

mongoose.model('Score', ScoreSchema)
module.exports = mongoose.model('Score')