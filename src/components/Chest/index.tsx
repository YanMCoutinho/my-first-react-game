import React from "react";
import './index.css'
import { TILE_SIZE } from "../../settings/constants";

const Chest = () => {
    return (
        <div 
            style={{
                height: TILE_SIZE,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/CHEST.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                animation: 'chest-animation 1s steps(3) infinite',
                position: 'absolute',
                left: TILE_SIZE * 3,
                bottom: TILE_SIZE * 6,

            }}
        />
    );
}

export default Chest;