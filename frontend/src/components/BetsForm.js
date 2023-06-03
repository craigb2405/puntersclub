import React from 'react'
import { useState } from 'react'
import { useBetsContext } from '../hooks/useBetsContext'

function BetsForm() {
    const { dispatch } = useBetsContext()
    const [punter, setPunter] = useState("")
    const [betAmount, setBetAmount] = useState(10)
    const [winAmount, setWinAmount] = useState(0)
    const [winLose, setWinLose] = useState("")

    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const bet = {punter, betAmount, winAmount, winLose}
        const response = await fetch('/api/bets', {
            method: 'POST',
            body: JSON.stringify(bet),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json(bet)

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setPunter('')
            setBetAmount(10)
            setWinAmount(0)
            setWinLose('')
            setError(null)
            console.log('New bet added', json)
            dispatch ({type: 'CREATE_BET', payload: json})
        }
    }
  return (
    <form className='create' onSubmit={handleSubmit}>
    <h3>Add a new bet:</h3>
    <label>Punter Name</label>
    <input
        type="text"
        onChange={(e) => setPunter(e.target.value)}
        value={punter}
    />
    <label>Bet Amount:</label>
    <input
        type="number"
        onChange={(e) => setBetAmount(e.target.value)}
        value={betAmount}
    />
    <label>Win Amount:</label>
    <input
        type="text"
        onChange={(e) => setWinAmount(e.target.value)}
        value={winAmount}
    />
    <label>Win or Lose:</label>
    <input
        type="text"
        onChange={(e) => setWinLose(e.target.value)}
        value={winLose}
    />
    <button>Add Bet</button>
    {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default BetsForm