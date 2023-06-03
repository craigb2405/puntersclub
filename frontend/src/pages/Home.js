import React, { useEffect } from 'react'
import { useBetsContext } from '../hooks/useBetsContext'

// Components
import BetDetails from '../components/BetDetails'
import BetsForm from '../components/BetsForm'

const Home = () => {
  const {bets, dispatch} = useBetsContext()
  
  useEffect(() => {
    const fetchBets = async () => {
      const response = await fetch('/api/bets')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_BETS', payload: json})
      }
    }

    fetchBets()
  }, [])

  return (
    <div className='home'>
      <div className='bets'>
          {bets && bets.map((bet) => (
        <BetDetails key={bet._id} bet={bet}/>
          
        ))}
        
      </div>
      <BetsForm/>
    </div>
  )
}

export default Home