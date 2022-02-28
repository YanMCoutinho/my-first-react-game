import React from "react";
import { ECanvas, TILE_SIZE } from "../../../settings/constants";

interface IProps {
    position: {x: number, y:number},
    text: number
}

function Tile(props: IProps) {
    function getTileColor(type: number) {
        switch(type) {
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
    const color = getTileColor(props.text);

    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            position: `absolute`,
            left: TILE_SIZE * props.position.x,
            top: TILE_SIZE * props.position.y,
            border: `3px solid ${color}`,
            color: color,
            fontSize: 32,
            textAlign: `center`,
            zIndex: 4,

        }}>
            {props.text}
        </div>
    )
}

export default Tile