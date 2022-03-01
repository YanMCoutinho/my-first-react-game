import React from "react";
import { ECanvas, IPosition } from "../../../../contexts/canvas/types";
import { TILE_SIZE } from "../../../../settings/constants";

interface IProps {
    tileId: ECanvas;
    position: IPosition;
}

function Tile(props: IProps) {
    function getTileColor() {
        switch(props.tileId) {
            case ECanvas.floor:
                return `darkgray`;

            case ECanvas.wall:
                return `yellow`;

            case ECanvas.door:
                return `white`;

            case ECanvas.trap:
                return `chartreuse`;

            case ECanvas.miniDemon:
            case ECanvas.demon:
                return `red`;

            case ECanvas.chest:
                return `cyan`;

            case ECanvas.hero:
                return `magenta`;
        }
    }
    const color = getTileColor();

    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            position: `absolute`,
            left: TILE_SIZE * props.position.x,
            top: TILE_SIZE * props.position.y,
            border: `${TILE_SIZE * 0.0625}px solid ${color}`,
            color: color,
            fontSize: TILE_SIZE * 0.666666667,
            textAlign: `center`,
            zIndex: 4,

        }}>
            {props.tileId}
        </div>
    )
}

export default Tile