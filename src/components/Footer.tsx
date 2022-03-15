import React from 'react'
import ghIcon from './assets/github-mark.png';

const Footer = () => {
  return (
    <div className='footer'>
        <p>Octavian Andrei</p>
        <a href="https://github.com/andrei3914"><img src={ghIcon} alt='github-mark' /></a>
    </div>
  )
}

export default Footer