import React from "react";
import './index.css'
import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

const initialPosition = {
    x: 1,
    y: 2
}

const Hero = () => {
const [positionState, setPositionState] = React.useState(initialPosition);    

    return (
        <div 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/HERO.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute',
                left: TILE_SIZE * positionState.x,
                bottom: TILE_SIZE * positionState.y,

            }}
        />
    );
}

export default Hero;