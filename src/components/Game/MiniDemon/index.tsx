import React from "react";
import './MiniDemon.css'
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../../../settings/constants";
import useEnemyMoviment from "../../../hooks/useEnemyMoviment";
import { IPosition } from "../../../contexts/canvas/types";

interface IProps {
    position: IPosition;
}

const MiniDemon = (props: IProps) => {
    const {position, direction} = useEnemyMoviment(props.position);

    return (
        <div 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/MINI-DEMON.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: `auto ${TILE_SIZE * 4}px`,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px `,
                animation: 'mini-demon-animation 0.4s steps(4) infinite',
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                top: TILE_SIZE * position.y - HEAD_OFFSET,
                transition: '0.1s',
                zIndex: 2
            }}
        />
    );
}

export default MiniDemon;