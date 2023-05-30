const express = require('express')
// Functions from betController
const {
    createBet,
    getBet,
    getBets,
    deleteBet,
    updateBet
} = require('../controllers/betController')
const router = express.Router()


// GET all bets
router.get('/', getBets)

// GET a single bet
router.get('/:id', getBet)

// POST a new bet
router.post('/', createBet)

// DELETE a bet
router.delete('/:id', deleteBet)

// UPDATE a workout
router.patch('/:id', updateBet)

module.exports = router