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
            <Chest />
            <Trap />
            <Hero />
            <MiniDemon />
            <Demon />
            <img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Board;