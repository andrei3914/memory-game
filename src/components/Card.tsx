import React from 'react'

interface Props {
    clicked: boolean,
    id: number,
    name: string,
    movie: string,
    image: string,
    handleClick: (id: number) => void
}

const Card: React.FC<Props> = ({ clicked, id, name, movie, image, handleClick}) => {
  return (
    <div 
        className="card"
        onClick={() => handleClick(id)}
        >
        <div className='imgContainer'>
            <img src={image} alt="" />
        </div>
        <div className='imgContent'>
            <ul>
                <li>
                    <strong>{name}</strong>
                </li>
                <li>
                    <strong>In </strong>{movie}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Card