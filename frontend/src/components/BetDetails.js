import React from 'react'
import { useBetsContext } from '../hooks/useBetsContext'

// Date FNS
import { formatDistanceToNow } from 'date-fns'

function BetDetails({bet}) {
  const { dispatch } = useBetsContext()


    const handleClick = async () => {
        const response = await fetch('/api/bets/' + bet._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
          dispatch({type: 'DELETE_BET', payload: json})
        }
    }
    
  return (

    
    <div className='bet-details'><h4>Punter Name: {bet.punter}</h4>
    
    <p><strong>Bet Amount: </strong>£{bet.betAmount}</p>
    <p><strong>Winnings Amount: </strong>£{bet.winAmount}</p>
    <p><strong>Win or Lose?: </strong>{bet.winLose}</p>
    <br/>
    <p><strong>Posted: </strong>{ formatDistanceToNow(new Date(bet.createdAt), { addSuffix: true})}</p>
    <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    
    </div>
  )
}

export default BetDetails