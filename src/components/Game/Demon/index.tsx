import React from "react";
import { IPosition } from "../../../contexts/canvas/types";
import useEnemyMoviment from "../../../hooks/useEnemyMoviment";
import { DEMON_TILE_SIZE, EDirection, TILE_SIZE } from "../../../settings/constants";
import './Demon.css'

interface IProps {
    position: IPosition;
}

const Demon = (props: IProps) => {
    const {position, direction} = useEnemyMoviment(props.position);

    return (
        <div 
            style={{
                height: DEMON_TILE_SIZE,
                width: DEMON_TILE_SIZE,
                backgroundImage:"url('./assets/DEMON.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px 0px`,
                backgroundSize: `auto ${TILE_SIZE * 4}`,
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