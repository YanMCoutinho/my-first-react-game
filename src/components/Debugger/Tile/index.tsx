import React from "react";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
    position: {x: number, y:number},
    text: number
}

function Tile(props: IProps) {
    function getTileColor(type: number) {
        switch(type) {
            case 0:
                return `yellow`;

            case 1:
                return `red`;
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
            fontSize: (TILE_SIZE / 4) * 2,
            textAlign: `center`,
            lineHeight: TILE_SIZE / 26 ,
            zIndex: 4,

        }}>
            {props.text}
        </div>
    )
}

export default Tile