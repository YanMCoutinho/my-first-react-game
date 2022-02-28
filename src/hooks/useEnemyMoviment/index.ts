import useInterval from "@use-it/interval";
import React from "react";
import { CanvasContext } from "../../contexts/canvas";
import { handleNextDirection, handleNextMoviment as handleNextPosition, validNextPosition } from "../../contexts/canvas/helpers";
import { EDirection, EWalker } from "../../settings/constants";

function useEnemyMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext)
    const [positionState, setPositionState] = React.useState(initialPosition);
    const [directionState, setDirectionState] = React.useState(EDirection.right);    

    useInterval(function move() {
        var random = Math.floor(Math.random() * 3);
        var positionArray = Object.values(EDirection);
        const randomPosition = positionArray[random];

        const [infoNextPosition, nextPosition] = canvasContext.setCanvas(randomPosition, positionState, EWalker.enemy);

        if (infoNextPosition.valid) {        
            setPositionState(nextPosition)
            handleNextDirection(randomPosition, setDirectionState)
        }
    }, 2000);

    return {
        position: positionState,
        direction: directionState
    }
}

export default useEnemyMoviment