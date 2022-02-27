import React from "react";
import './index.css'
import { DEMON_TILE_SIZE, TILE_SIZE } from "../../settings/constants";

const Demon = () => {
    return (
        <div 
            style={{
                height: DEMON_TILE_SIZE,
                width: DEMON_TILE_SIZE,
                backgroundImage:"url('./assets/DEMON.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                animation: 'demon-animation 1s steps(4) infinite',
                position: 'absolute',
                left: TILE_SIZE * 4,
                bottom: TILE_SIZE * 2,

            }}
        />
    );
}

export default Demon;