const mongoose = require('mongoose')

const Schema = mongoose.Schema

const betSchema = new Schema({
    punter: {
        type: String,
        required: true
    },
    betAmount: {
        type: Number,
        required: true
    },
    winAmount: {
        type: Number,
        required: true
    },
    winLose: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Bet', betSchema)