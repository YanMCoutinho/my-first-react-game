import React from 'react';
import './App.css';
import { GAME_SIZE } from '../settings/constants';
import Game from './Game';
import CanvasProvider from '../contexts/canvas';
import ChestsProvider from '../contexts/chests';
import GameStatusProvider from '../contexts/gameStatus';

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
        >
        <CanvasProvider>
          <ChestsProvider>
            <GameStatusProvider>
              <Game />
            </GameStatusProvider>
          </ChestsProvider>
        </CanvasProvider>
      </div>
    </div>
  );
}

export default App;
