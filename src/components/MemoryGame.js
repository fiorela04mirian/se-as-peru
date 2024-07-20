import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "100",
  "1000",
  "1000000",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disableAll, setDisableAll] = useState(false);
  const [time, setTime] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [bestTimes, setBestTimes] = useState([]);
  const [gameResult, setGameResult] = useState("");

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
      setGameResult("¡Se acabó el tiempo! Has perdido.");
    }
  }, [time]);

  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && cards.length > 0) {
      const newTime = 60 - time;
      setBestTimes([...bestTimes, newTime].sort((a, b) => a - b).slice(0, 5));
      setGameOver(true);
      setGameResult("¡Has ganado!");
    }
  }, [matchedCards]);

  useEffect(() => {
    let timer;
    if (!gameOver) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [gameOver]);

  const startNewGame = () => {
    const selectedNumbers = shuffleArray([...numbers]).slice(0, 8);
    const pairedCards = shuffleArray([...selectedNumbers, ...selectedNumbers]);
    setCards(
      pairedCards.map((number, index) => ({
        id: index,
        number,
        flipped: false,
      }))
    );
    setFlippedCards([]);
    setMatchedCards([]);
    setDisableAll(false);
    setTime(60);
    setGameOver(false);
    setGameResult("");
  };

  const handleCardClick = (id) => {
    if (
      disableAll ||
      flippedCards.includes(id) ||
      matchedCards.includes(cards.find((card) => card.id === id).number)
    )
      return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards.map((cardId) =>
        cards.find((card) => card.id === cardId)
      );
      if (firstCard.number === secondCard.number) {
        setMatchedCards([...matchedCards, firstCard.number]);
      }

      setDisableAll(true);
      setTimeout(() => {
        setFlippedCards([]);
        setDisableAll(false);
      }, 1000);
    }
  };

  return (
    <div className="memory-game-container">
      <h1>Juego de Memoria - Números en Lenguaje de Señas</h1>
      <div className="timer">Tiempo restante: {time} segundos</div>
      <div className="memory-game">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`memory-card ${
              flippedCards.includes(card.id) ||
              matchedCards.includes(card.number)
                ? "flipped"
                : ""
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="memory-card-inner">
              <div className="memory-card-front"></div>
              <div className="memory-card-back">
                <img
                  src={require(`../components/images/numeros/${card.number}.png`)}
                  alt={`Número ${card.number}`}
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={startNewGame}>Reiniciar Juego</button>
      <div className="ranking">
        <h2>Ranking de Mejores Tiempos</h2>
        <ul>
          {bestTimes.map((time, index) => (
            <li key={index}>{time} segundos</li>
          ))}
        </ul>
      </div>
      {gameResult && (
        <div className="overlay">
          <div className="game-result">
            <h2>{gameResult}</h2>
            <button onClick={startNewGame}>Jugar de Nuevo</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
