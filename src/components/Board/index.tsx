import React from 'react';
import { GAME_SIZE } from '../../settings/constants';
import Demon from '../Demon';
import Hero from '../Hero';
import Chest from '../Chest';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';

const Board = () => {
    return (
        <div>
            <Chest position={{x: 3, y: 12}} />
            <Trap position={{x: 2, y: 10}} />
            <Hero position={{x: 1, y: 17}} />
            <MiniDemon position={{ x: 5, y: 5}} />
            <MiniDemon position={{ x: 10, y: 10}} />
            <Demon position={{x: 13, y: 3}} />
            <img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Board;