const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

const Score = require('./Score')

router.post('/', (req, res) => {
    Score.create({
        name: req.body.name,
        score: req.body.score
    },
    (err, user) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(user)
    })
})

router.get('/', (req, res) => {
    Score.find({}, (err, users) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(users)
    })
})

module.exports = router