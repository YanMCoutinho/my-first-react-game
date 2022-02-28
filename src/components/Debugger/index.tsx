import React from "react";
import { CanvasContext } from "../../contexts/canvas";
import Tile from "./Tile";

function getCanvasMap(canvas: number[][]) {
    const tileArray = []
    
    for (let row = 0; row < canvas.length; row++) {
        for (let column = 0; column < canvas[row].length; column++) {
            const tilePosition = {x: column, y: row };
            const tile = canvas[row][column];
            const key = `${column},${row}`

            tileArray.push(<Tile key={key} position={tilePosition} text={tile} />)
        }
    }

    return tileArray
}


function Debugger() {
    const canvasContext = React.useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);

    return (
        <div style={{zIndex: 6}}>
            {tiles}
        </div>
    )
}

export default Debugger