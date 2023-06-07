import React from 'react'
import { useState } from 'react'
import { useBetsContext } from '../hooks/useBetsContext'

function BetsForm() {
    const { dispatch } = useBetsContext()
    const [punter, setPunter] = useState("")
    const [betAmount, setBetAmount] = useState(10)
    const [winAmount, setWinAmount] = useState(0)
    const [winLose, setWinLose] = useState("")
    const [emptyFields, setEmptyfields] = useState([])

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
            setEmptyfields(json.emptyFields)
        }
        if (response.ok){
            setPunter('')
            setBetAmount(10)
            setWinAmount(0)
            setWinLose('')
            setError(null)
            setEmptyfields([])
            console.log('New bet added', json)
            dispatch ({type: 'CREATE_BET', payload: json})
        }
    }
  return (
    <form className='create' onSubmit={handleSubmit}>
    <h3>Add a new bet:</h3>
    <label for="punterName">Punter Name</label>
    <select id='punterName'
        onChange={(e) => setPunter(e.target.value)}
        value={punter}
        className={emptyFields.includes('punter') ? 'error' : ''}>
        <option value='Gibson'>Gibson</option>
        <option value='Butler'>Butler</option>
        <option value='McQuarrie'>McQuarrie</option>
        <option value='Surinder'>Surinder</option>
        <option value='Beaver'>Beaver</option>
        <option value='Andy'>Andy</option>
        <option value='Scott'>Scott</option>
        <option value='Jim'>Jim</option>
    </select>
    <label>Bet Amount:</label>
    <input
        type="number"
        onChange={(e) => setBetAmount(e.target.value)}
        value={betAmount}
        className={emptyFields.includes('betAmount') ? 'error' : ''}
    />
    <label>Win Amount:</label>
    <input
        type="text"
        onChange={(e) => setWinAmount(e.target.value)}
        value={winAmount}
        className={emptyFields.includes('winAmount') ? 'error' : ''}
    />
    <label>Win or Lose:</label>
    <input
        type="text"
        onChange={(e) => setWinLose(e.target.value)}
        value={winLose}
        className={emptyFields.includes('winLose') ? 'error' : ''}
    />
    <button>Add Bet</button>
    {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default BetsForm