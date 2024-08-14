import React, { useState } from 'react';

const PuzzleGame = () => {
  const [gameBoard, setGameBoard] = useState([
    {
      backgroundImage: 'url("pop-up-toy-1.png")',
    },
    {
      backgroundImage: 'url("pop-up-toy-2.png")',
    },
    {
      backgroundImage: 'url("pop-up-toy-3.png")',
    },
    {
      backgroundImage: 'url("pop-up-toy-4.png")',
    },
  ]);

  const handlePieceClick = (index) => {
    console.log(`Clicked on puzzle piece ${index}`);
  };

  return (
    <div className="container">
      {gameBoard.map((piece, index) => (
        <div
          key={index}
          className="puzzle-piece"
          style={piece}
          onClick={() => handlePieceClick(index)}
        />
      ))}
    </div>
  );
};

export default PuzzleGame;
