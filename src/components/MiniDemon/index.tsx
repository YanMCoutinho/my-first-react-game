import React from "react";
import './index.css'
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";

const MiniDemon = () => {
    const {position, direction} = useEnemyMoviment({x: 10, y: 5});

    return (
        <div 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/MINI-DEMON.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px `,
                animation: 'mini-demon-animation 0.4s steps(4) infinite',
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                bottom: TILE_SIZE * position.y,
                transition: '0.1s'
            }}
        />
    );
}

export default MiniDemon;