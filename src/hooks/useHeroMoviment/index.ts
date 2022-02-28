import useEventListener from "@use-it/event-listener";
import React from "react";
import { handleNextDirection, handleNextMoviment } from "../../contexts/canvas/helpers";
import { EDirection } from "../../settings/constants";

function useHeroMoviment(initialPosition) {
    const [positionState, setPositionState] = React.useState(initialPosition);
    const [directionState, setDirectionState] = React.useState(EDirection.right);    

    useEventListener('keydown', (event: {key: String}) => {
        var pressedKey: EDirection = event.key as EDirection

        const similarKeys = {
            'w': EDirection.up,
            'd': EDirection.right,
            's': EDirection.down,
            'a': EDirection.left
        }

        if (similarKeys[pressedKey]) {
            pressedKey = similarKeys[pressedKey]
        }

        if (pressedKey.indexOf(`Arrow`) !== -1) {
            const nextMoviment = handleNextMoviment(pressedKey, positionState)
            handleNextDirection(pressedKey, setDirectionState)
            setPositionState(nextMoviment)   
        }
    })

    return {
        position: positionState,
        direction: directionState
    }
}

export default useHeroMoviment