import React from "react";
import './index.css'
import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

const MiniDemon = () => {
    return (
        <div 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/MINI-DEMON.png')",
                backgroundRepeat: 'no-repeat',
                //backgroundSize: TILE_SIZE * 3.95833333,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px `,
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: 'absolute',
                left: TILE_SIZE,
                bottom: TILE_SIZE * 5
            }}
        />
    );
}

export default MiniDemon;