import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Card from './components/Card';
import characters from './characters.json';

function App() {
  const [clicked, setClicked] = useState(false);
  const [chars, setChars] = useState(characters);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (id: number) => {
    shuffleArray();
    handleScore(id);
  }

  const handleScore = (id: number) => {
    chars.forEach(char => {
      if (id === char.id && char.clicked === false) {
        char.clicked = true;
        setClicked(true);
        increment();
      } else if (id === char.id && char.clicked === true) {
        currentScore > highScore ? setHighScore(currentScore) : setHighScore(highScore);
        setCurrentScore(0);
        setClicked(true);
        chars.forEach(char => char.clicked = false);
      }
    })
  } 

  const shuffleArray = () => {
    const shuffledArr = shuffle(chars);
    setChars(shuffledArr);
  }

  const increment = () => {
    setCurrentScore(currentScore + 1);
  }

  // random array function
  const shuffle = (array: {
    id: number;
    clicked: boolean;
    name: string;
    image: string;
    movie: string;
    }[]) => {
    let currentIndex: number = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  return (
    <div className="App">
      <div>
        <Navigation 
          currentScore={currentScore}
          highScore={highScore}
        />
      </div>
      <div className='appBody'>
        {
          characters.map(character => 
            (<Card
              clicked={clicked} 
              handleClick={handleClick}
              id={character.id}
              key={character.id}
              name={character.name}
              movie={character.movie}
              image={character.image}           
            />
          ))
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
