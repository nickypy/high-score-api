const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

const Score = require('./Score')

router.post('/', (req, res) => {
    Score.create({
        name: req.body.name,
        score: req.body.score,
        date: new Date()
    },
    (err, user) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(user)
    })
})

router.delete('/:id', (req, res) => {
    Score.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send('Delete successful')
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

router.get('/top', (req, res) => {
    Score.find({}).sort([['score', -1]]).exec((err, users) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(users)
    })
})

router.get('/today', (req, res) => {
    const start = new Date()
    start.setHours(0,0,0,0)

    const end = new Date()
    end.setHours(23,59,59,999)

    Score.find({
        date: {
            $gte: start,
            $lt: end
        }
    }).sort([['score', -1]])
      .exec((err, users) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(users)
    })
})

router.get('/month', (req, res) => {
    const start = new Date()
    start.setHours(0,0,0,0)
    start.setMonth(start.getMonth() - 1)

    const end = new Date()
    end.setHours(23,59,59,999)

    Score.find({
        date: {
            $gte: start,
            $lt: end
        }
    }).sort([['score', -1]])
      .exec((err, users) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(users)
    })
})

router.get('/recent', (req, res) => {
    Score.find({}).sort([['date', -1]]).exec((err, users) => {
        if (err) {
            return res.status(500).send('An error occured')
        }
        res.status(200).send(users)
    })
})

module.exports = router