import React from 'react'

function BetDetails({bet}) {
    const handleClick = async () => {
        const response = await fetch('/api/bets/' + bet._id, {
            method: 'DELETE'
        })
        const json = await response.json()
    }
    
  return (

    
    <div className='bet-details'><h4>Punter Name: {bet.punter}</h4>
    <p><strong>Date: </strong>{bet.createdAt}</p>
    <p><strong>Bet Amount: </strong>£{bet.betAmount}</p>
    <p><strong>Winnings Amount: </strong>£{bet.winAmount}</p>
    <p><strong>Win or Lose?: </strong>{bet.winLose}</p>
    <span onclick={handleClick}></span>
    </div>
  )
}

export default BetDetails