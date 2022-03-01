import useInterval from "@use-it/interval";
import { useContext, useState } from "react";
import { CanvasContext } from "../../contexts/canvas";
import { handleNextDirection  } from "../../contexts/canvas/helpers";
import { IPosition } from "../../contexts/canvas/types";
import { GameStatusContext } from "../../contexts/gameStatus";
import { EDirection, EWalker } from "../../settings/constants";

function useEnemyMoviment(initialPosition: IPosition) {
    const { setCanvas } = useContext(CanvasContext);
    const { setIsDead } = useContext(GameStatusContext)

    const [position, setPosition] = useState<IPosition>(initialPosition);
    const [direction, setDirection] = useState<EDirection>(EDirection.left)

    useInterval(move, 500)

    function move() {
        const directions = Object.values(EDirection);
        const random = Math.floor(Math.random() * directions.length)
        const moveDirection = directions[random]

        const moviment = setCanvas(moveDirection, position, EWalker.enemy);
        setPosition(moviment.position)

        handleNextDirection(moveDirection, setDirection)

        if (moviment.consequences.dead) {
            setIsDead();
        }
    }

    return {
        position: position,
        direction: direction
    }
}

export default useEnemyMoviment