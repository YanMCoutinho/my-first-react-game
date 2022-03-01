import { PropsWithChildren, useEffect, useState } from "react";
import { getCanvasMap } from "../../../contexts/canvas/helpers";
import { canvasArray } from '../../../contexts/canvas/types';
import './Debugger.css';
import Tile from "./Tile";

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
            <button
                onClick={() => setDebug(!debug)}
            >
                DEBUG
            </button>
            {props.children}
            {debug && tiles}
        </>
    )
}

export default Debugger