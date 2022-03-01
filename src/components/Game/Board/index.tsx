import React, { PropsWithChildren, useEffect, useState } from 'react';
import Demon from '../Demon';
import Hero from '../Hero';
import Chest from '../Chest';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';
import { GAME_SIZE } from '../../../settings/constants';
import { canvasArray, ECanvas } from '../../../contexts/canvas/types';
import { initialCanvasMap } from '../../../contexts/canvas/helpers';
import Door from './Door';
import GameStatus from './GameStatus';

interface IProps {
    canvas: canvasArray
}

const Board = (props: PropsWithChildren<IProps>) => {
    const [enemies, setEnemies] = useState<(JSX.Element | null)[]>([]);

    useEffect(() => {
        renderEnemies();

        function renderEnemies() {
            const enemiesMap = Object.keys(initialCanvasMap).map((key) => {
                const  { tile, position } = initialCanvasMap[key];
                if (tile === ECanvas.trap) {
                    return (<Trap key={key} position={position} />)
                }
    
                if (tile === ECanvas.miniDemon) {
                    return (<MiniDemon key={key} position={position} />)
                }
    
                if (tile === ECanvas.demon) {
                    return (<Demon key={key} position={position} />)
                }
    
                if (tile === ECanvas.chest) {
                    return (<Chest key={key} position={position} />)
                }
    
                if (tile === ECanvas.hero) {
                    return (<Hero key={key} position={position} />)
                } 
                
                return null
            }).filter(Boolean);

            setEnemies(enemiesMap)
        }
    }, []);

    

    return (
        
        <div>
            <img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} style={{
                borderImageRepeat: 'stretch',
            }} />
            
            <Door />
            <GameStatus />
            {props.children}
            {enemies}            
        </div>
    );
}

export default Board;