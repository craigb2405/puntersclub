import React, { useEffect, useState } from 'react'

function Home() {
  const [bets, setBets] = useState(null)

  useEffect(() => {
    const fetchBets = async () => {
      const response = await fetch('http://localhost:4000/api/bets')
      const json = await response.json()

      if (response.ok) {
        setBets(json)

      }

    }
    fetchBets()

  }, [])
  return (
    <div className='home'>
      <div className='bets'>
        {bets && bets.map(() => (
          <p key={bets._id}>{bets.punter}</p>
        ))}
      </div>
    </div>
  )
}

export default Home