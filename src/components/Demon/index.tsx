import React from "react";
import './index.css'
import { DEMON_TILE_SIZE, EDirection, TILE_SIZE } from "../../settings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";

const Demon = (props) => {
    const {position, direction} = useEnemyMoviment(props.position);

    return (
        <div 
            style={{
                height: DEMON_TILE_SIZE,
                width: DEMON_TILE_SIZE,
                backgroundImage:"url('./assets/DEMON.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                animation: 'demon-animation 1.1s steps(4) infinite',
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                top: TILE_SIZE * position.y,
                transition: '0.4s',
                zIndex: 2,
            }}
        />
    );
}

export default Demon;