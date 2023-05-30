require('dotenv').config()
const express = require('express')
const betsRoutes = require('./routes/bets')

// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/bets', betsRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})