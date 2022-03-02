import { PropsWithChildren, useEffect, useState } from "react";
import { getCanvasMap } from "../../../contexts/canvas/helpers";
import { canvasArray } from '../../../contexts/canvas/types';
import './Debugger.css';
import Tile from "./Tile";
import styled from 'styled-components'
import { TILE_SIZE } from "../../../settings/constants";

const Button = styled.button`
    position: absolute;
    top: ${TILE_SIZE * 0.104166667}px;
    right: 0;
    padding: ${TILE_SIZE * 0.208333333}px;
    border-radius: ${TILE_SIZE * 0.166666667}px;
    font-size: ${TILE_SIZE * 0.375}px;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    color: rgb(240, 240, 240);
    background-color: rgb(13, 175, 70);
    transition-duration: 0.8s;
    cursor: pointer;
    z-index: 6;
`

interface IProps {
    canvas: canvasArray;
}

function Debugger(props: PropsWithChildren<IProps>) {
    const [tiles, setTiles] = useState<JSX.Element[]>([]);
    const [debug, setDebug] = useState<boolean>(false);

    useEffect(() => {
        if (debug) {
            loadTiles();
        }

        function loadTiles() {
            const canvas = getCanvasMap(props.canvas);
            const tilesMap = Object.keys(canvas).map((key) => {
                const { tile, position } = canvas[key];

                return <Tile key={key} tileId={tile} position={position} />
            })

            setTiles(tilesMap);
        }
    }, [props.canvas, debug]); 



    return (
        <>
            <Button
                onClick={() => setDebug(!debug)}
            >
                DEBUG
            </Button>
            {props.children}
            {debug && tiles}
        </>
    )
}

export default Debugger