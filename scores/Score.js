const mongoose = require('mongoose')
const ScoreSchema = new mongoose.Schema({
    name: String,
    score: Number
})

mongoose.model('Score', ScoreSchema)
module.exports = mongoose.model('Score')