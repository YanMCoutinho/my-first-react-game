import React from 'react';
import { ECanvas, GAME_SIZE } from '../../settings/constants';
import Demon from '../Demon';
import Hero from '../Hero';
import Chest from '../Chest';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';
import { canvas } from '../../contexts/canvas/helpers';

function getCanvasMap(canvas: number[][]) {
    const elementArray = []
    
    for (let row = 0; row < canvas.length; row++) {
        for (let column = 0; column < canvas[row].length; column++) {
            const elementPosition = {x: column, y: row };
            const element = canvas[row][column];
            const key = `${column},${row}`

            if (element === ECanvas.trap) {
                elementArray.push(<Trap key={key} position={elementPosition} />)
            }

            if (element === ECanvas.miniDemon) {
                elementArray.push(<MiniDemon key={key} position={elementPosition} />)
            }

            if (element === ECanvas.demon) {
                elementArray.push(<Demon key={key} position={elementPosition} />)
            }

            if (element === ECanvas.chest) {
                elementArray.push(<Chest key={key} position={elementPosition} />)
            }

            if (element === ECanvas.hero) {
                elementArray.push(<Hero key={key} position={elementPosition} />)
            } 

            //tileArray.push(<Tile key={key} position={tilePosition} text={tile} />)
        }
    }

    return elementArray
}

const elements = getCanvasMap(canvas);

const Board = () => {
    return (
        <div>
            {elements}
            <img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Board;