import useEventListener from "@use-it/event-listener";
import { useContext, useState } from "react";
import { CanvasContext } from "../../contexts/canvas";
import { handleNextDirection  } from "../../contexts/canvas/helpers";
import { ICanvasMoviment, IPosition } from "../../contexts/canvas/types";
import { GameStatusContext } from "../../contexts/gameStatus";
import { EDirection, EWalker } from "../../settings/constants";

function useEnemyMoviment(initialPosition: IPosition) {
    const { heroPosition, setCanvas } = useContext(CanvasContext);
    const { setIsDead } = useContext(GameStatusContext)

    const [position, setPosition] = useState<IPosition>(initialPosition);
    const [direction, setDirection] = useState<EDirection>(EDirection.left)

    useEventListener('keyup', move)
    
    function move(event: KeyboardEvent) {
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

        if (pressedKey.indexOf(`Arrow`) === -1) {
            return;
        }

        const moveDirections: EDirection[] = catchHero(position, heroPosition)
        const {movement, moveDirection} = thisMovementArrayIsValid(moveDirections, position)
        

        setPosition(movement.position)
        handleNextDirection(moveDirection, setDirection)

        if (movement.consequences.dead) {
            setIsDead();
        }
    }

    return {
        position: position,
        direction: direction
    }

    function thisMovementArrayIsValid(directions: EDirection[], position: IPosition): {movement: ICanvasMoviment, moveDirection: EDirection} {
    
        let movement: ICanvasMoviment;
        let moveDirection: EDirection;
    
        for (let counter = 0; counter < directions.length ; counter++) {
            movement = setCanvas(directions[counter], position, EWalker.enemy);
            moveDirection = directions[counter];
    
            if (movement.consequences.valid) {
                return {movement, moveDirection};
            }
        }
    }
}

function catchHero(position: IPosition, heroPosition: IPosition): EDirection[] {
    const x = position.x - heroPosition.x
    const y = position.y - heroPosition.y
    let x1 = EDirection.up
    let x2 = EDirection.up
    let y1 = EDirection.up
    let y2 = EDirection.up
    let result: EDirection[] = []

    if (x >= 0) {
        x1 = EDirection.left
        x2 = EDirection.right
    } else {
        x1 = EDirection.right
        x2 = EDirection.left
    }

    if (y >= 0) {
        y1 = EDirection.up
        y2 = EDirection.down
    } else {
        y1 = EDirection.down
        y2 = EDirection.up
    }

    if (Math.abs(x) > Math.abs(y)) {
        result.push(x1)
        result.push(y1)
        result.push(y2)
        result.push(x2)
    } else {
        result.push(y1)
        result.push(x1)
        result.push(x2)
        result.push(y2)
    }

    return result;
}


export default useEnemyMoviment