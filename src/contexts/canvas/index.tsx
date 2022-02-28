import React from "react";
import { ECanvas, EWalker } from "../../settings/constants";

import { canvas, handleNextMoviment, validNextPosition } from "./helpers";

interface IProps {
    children: React.ReactNode;
}

export const CanvasContext = React.createContext({
    canvas: [],
    setCanvas: (pressedKey: String, position, walker: EWalker) => null
})

export default function CanvasProvider(props: IProps): JSX.Element {
    const [canvasState, setCanvasState] = React.useState({
        canvas: canvas,
        setCanvas: (direction: String, position, walker: EWalker) => {
            const nextPosition = handleNextMoviment(direction, position)
            const infoNextPosition = validNextPosition(nextPosition, canvas, walker)

            if (infoNextPosition.valid) {
                setCanvasState((prevState) => {
                    const newCanvas = Object.assign([], prevState.canvas);
                    const currentValue = newCanvas[position.y][position.x]

                    newCanvas[position.y][position.x] = ECanvas.floor;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                    return {
                        canvas: newCanvas,
                        setCanvas: prevState.setCanvas
                    }
                })
            }

            return [
                infoNextPosition,
                nextPosition,   
            ]
        }
    });

    return (
        <CanvasContext.Provider value={canvasState} >
            {props.children} 
        </CanvasContext.Provider>
    )
}