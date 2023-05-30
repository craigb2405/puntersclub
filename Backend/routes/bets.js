const express = require('express')
const router = express.Router()


// GET all bets
router.get('/', (req, res) => {
    res.json({mssg: 'GET all bets'})
})

// GET a single bet
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single bet'})
})

// POST a new bet
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new bet'})
})

// DELETE a bet
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a bet'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a bet'})
})

module.exports = router