import React from 'react'

function StatCards(bets) {
      let wins = bets.bets.map(x=>x.winLose)
      console.log(wins)
              
      


    

  return (
    <div className='statContainer'>
    
    <div className='statCard'><h2>Win/Loss</h2>
    <p>2 - 5</p></div>
    <div className='statCard'><h2>Bet/Won</h2>
    <p>£50 - £278</p></div>
    <div className='statCard'><h2>Profit</h2>
    <p>£228</p></div>

    </div>
  )
}

export default StatCards