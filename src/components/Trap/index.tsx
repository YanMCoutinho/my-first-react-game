import React from "react";
import './index.css'
import { TILE_SIZE } from "../../settings/constants";

const Trap = () => {
    return (
        <div 
            style={{
                height: TILE_SIZE,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/TRAP.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                animation: 'trap-animation 1s steps(8) infinite',
                position: 'absolute',
                left: TILE_SIZE * 9,
                bottom: TILE_SIZE * 13,

            }}
        />
    );
}

export default Trap;