import React from "react";
import Tile from "./Tile";
import { canvas } from "../../contexts/canvas/helpers";

function getCanvasMap(canvas: number[][]) {
    const tiles = []
    
    for (let row = 0; row < canvas.length; row++) {
        for (let column = 0; column < canvas[row].length; column++) {
            const tilePosition = {x: column, y: row };
            const tile = canvas[row][column];

            tiles.push(<Tile position={tilePosition} text={tile} />)
        }
    }

    return tiles
}


function Debugger() {
    const tiles = getCanvasMap(canvas);

    return (
        <div style={{zIndex: 6}}>
            {tiles}
        </div>
    )
}

export default Debugger