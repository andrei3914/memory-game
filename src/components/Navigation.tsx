import React from 'react'
import './style.css';

interface Props {
  currentScore: number,
  highScore: number
}

const Navigation: React.FC<Props> = ({ currentScore, highScore }) => {
  return (
    <div className='navDiv'>
        <div>
            <p className='navTitle'>Memory game</p>
            <p className='navP'>...with legendary movie characters!</p>
        </div>
        <div className='scoring'>
            <p>{'Best score possible: 12'}</p>
            <p>{'Current score: ' + currentScore}</p>
            <p>{'Best score: ' + highScore}</p>
        </div>
    </div>
  )
}

export default Navigation