import useEventListener from "@use-it/event-listener";
import React from "react";
import { CanvasContext } from "../../contexts/canvas";
import { handleNextDirection } from "../../contexts/canvas/helpers";
import { ChestsContext } from "../../contexts/chests";
import { EDirection, EWalker } from "../../settings/constants";

function useHeroMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext)
    const chestsContext = React.useContext(ChestsContext)
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

            const [infoNextPosition, nextPosition] = canvasContext.setCanvas(pressedKey, positionState, EWalker.hero);

            if (infoNextPosition.valid) {
                handleNextDirection(pressedKey, setDirectionState)
                setPositionState(nextPosition)

                if (infoNextPosition.dead) {
                    console.log('ai ai')
                }

                if (infoNextPosition.chest) {
                    chestsContext.setOpenedChests();
                }
            }
        }
    })

    return {
        position: positionState,
        direction: directionState
    }
}

export default useHeroMoviment