import useInterval from "@use-it/interval";
import React from "react";
import { handleNextDirection, handleNextMoviment as handleNextPosition } from "../../contexts/canvas/helpers";
import { EDirection } from "../../settings/constants";

function useEnemyMoviment(initialPosition) {
    const [positionState, setPositionState] = React.useState(initialPosition);
    const [directionState, setDirectionState] = React.useState(EDirection.right);    

    useInterval(function move() {
        var random = Math.floor(Math.random() * 3);
        var positionArray = Object.values(EDirection);
        const randomPosition = positionArray[random];
        const nextPosition = handleNextPosition(randomPosition, positionState)
        
        setPositionState(nextPosition)
        handleNextDirection(randomPosition, setDirectionState)
    }, 2000);

    return {
        position: positionState,
        direction: directionState
    }
}

export default useEnemyMoviment