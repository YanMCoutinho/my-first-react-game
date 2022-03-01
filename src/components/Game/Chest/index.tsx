import React, { useContext } from "react";
import { IPosition } from "../../../contexts/canvas/types";
import { ChestsContext } from "../../../contexts/chests";
import { TILE_SIZE } from "../../../settings/constants";
import './Chest.css'

interface IProps {
    position: IPosition;
}

const Chest = (props: IProps) => {
    const {x, y} = props.position
    const { openedChests } = useContext(ChestsContext)

    const shouldAnimate = openedChests.positions.find(
        position => position.x === x && position.y === props.position.y
    );

    const animation = shouldAnimate ? 'chest-animation 1s forwards steps(2)' : null;

    return (
        <div 
            style={{
                height: TILE_SIZE,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/CHEST.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px 0px`,
                //backgroundSize: TILE_SIZE * 3.95833333,
                animation: animation,
                position: 'absolute',
                left: TILE_SIZE * x,
                top: TILE_SIZE * y,
                zIndex: 0,

            }}
        />
    );
}

export default Chest;