const Bet = require('../models/betModel')
const mongoose = require('mongoose')

// Get all bets
const getBets = async (req, res) => {
    const bets = await Bet.find({}).sort({createdAt: -1})
    res.status(200).json(bets)
}

// Get a single bet
const getBet = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bet'})
    }
    const bet = await Bet.findById(id)
    if (!bet) {
        return res.status(404).json({error: 'No such bet'})
    }
    res.status(200).json(bet)
}


// Create a new bet
const createBet = async (req, res) => {
    const {punter, betAmount, winAmount,winLose} = req.body

    // Add bet to DB

    try{
        const bet = await Bet.create({punter, betAmount, winAmount, winLose})
        res.status(200).json(bet)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a bet
const deleteBet = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bet'})
    }
    const bet = await Bet.findOneAndDelete({_id: id})
    if (!bet) {
        return res.status(404).json({error: 'No such bet'})
    }
    res.status(200).json(bet)
}

// Update a bet
const updateBet = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bet'})
    }
    const bet = await Bet.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!bet) {
        return res.status(404).json({error: 'No such bet'})
    }
    res.status(200).json(bet)
}

module.exports = {
    createBet,
    getBet,
    getBets,
    deleteBet,
    updateBet
}