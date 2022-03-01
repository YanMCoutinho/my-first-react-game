import { createContext, PropsWithChildren, useState } from "react";
import { EDirection, EWalker } from "../../settings/constants";

import { checkNextMoveIsValid, handleWalk, initialCanvas } from "./helpers";
import { ECanvas, ICanvasContext, IPosition, IWalker } from "./types";


export const CanvasContext = createContext<ICanvasContext>({
    canvas: [],
    setCanvas: () => ({ position: {x: 0, y:0}, consequences: {valid: true, dead: false, chest:  false, door: false} }),
});

export default function CanvasProvider(props: PropsWithChildren<{}>) {
    const [canvasState, setCanvasState] = useState<ICanvasContext>({
        canvas: initialCanvas,
        setCanvas: (direction, position, walker) => {
            const nextPosition = handleWalk(direction, position)
            const nextMove = checkNextMoveIsValid(canvasState.canvas, nextPosition, walker);

            if (nextMove.valid) {
                setCanvasState(prevState => {
                    const newCanvas = [...prevState.canvas];
                    const currentValue = newCanvas[position.y][position.x] as ECanvas;

                    newCanvas[position.y][position.x] = ECanvas.floor;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                    return {
                        ...prevState,
                        canvas: newCanvas
                    };
                });
            }

            return {
                consequences: nextMove,
                position: nextMove.valid ? nextPosition : position,
            };
        },
    });

    return (
        <CanvasContext.Provider value={canvasState} >
            {props.children} 
        </CanvasContext.Provider>
    )
}