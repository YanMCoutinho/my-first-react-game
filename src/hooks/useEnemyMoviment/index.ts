import useEventListener from "@use-it/event-listener";
import React from "react";
import { EDirection } from "../../settings/constants";

function useEnemyMoviment(initialPosition) {
    const [positionState, setPositionState] = React.useState(initialPosition);
    const [directionState, setDirectionState] = React.useState(EDirection.right);    

    function move() {+
                if (event.key === EDirection.up || event.key.toUpperCase() === 'W') {
            const newPosition = {
                x: (positionState.x), 
                y: (positionState.y + 1)
            }
            setPositionState(newPosition)

        } else if (event.key === EDirection.right || event.key.toUpperCase() === 'D') {
            const newPosition = {
                x: (positionState.x + 1), 
                y: (positionState.y)
            }
            setDirectionState(EDirection.right)
            setPositionState(newPosition)

        } else if (event.key === EDirection.down || event.key.toUpperCase() === 'S') {
            const newPosition = {
                x: (positionState.x), 
                y: (positionState.y - 1)
            }
            setPositionState(newPosition)

        } else if (event.key === EDirection.left || event.key.toUpperCase() === 'A') {
            const newPosition = {
                x: (positionState.x - 1), 
                y: (positionState.y)
            }
            setDirectionState(EDirection.left)
            setPositionState(newPosition)
        }
    }

    return {
        position: positionState,
        direction: directionState
    }
}

export default useEnemyMoviment