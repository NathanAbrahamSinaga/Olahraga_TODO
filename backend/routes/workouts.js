const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({message: `GET a single workout`})
})

// post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

module.exports = router