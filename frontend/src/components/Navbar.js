import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Punters Club</h1>
            </Link>
            <div className='navbar'>
            <Link to="/">All Bets</Link>
            <Link to="/">Punter Stats</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar