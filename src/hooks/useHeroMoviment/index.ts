import useEventListener from "@use-it/event-listener";
import { useContext, useState } from "react";
import { CanvasContext } from "../../contexts/canvas";
import { handleNextDirection } from "../../contexts/canvas/helpers";
import { IPosition } from "../../contexts/canvas/types";
import { ChestsContext } from "../../contexts/chests";
import { GameStatusContext } from "../../contexts/gameStatus";
import { EDirection, EWalker } from "../../settings/constants";

function useHeroMoviment(initialPosition: IPosition) {
    const { setCanvas } = useContext(CanvasContext);
    const { setIsWinner, setIsDead } = useContext(GameStatusContext);
    const { setOpenedChests, openedChests, totalChests } = useContext(ChestsContext)

    const [position, setPosition] = useState<IPosition>(initialPosition)
    const [direction, setDirection] = useState<EDirection>(EDirection.right)

    useEventListener('keyup', moveHero)

    function moveHero(event: KeyboardEvent) {
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
        const movement = setCanvas(pressedKey, position, EWalker.hero)
        setPosition(movement.position)
        handleNextDirection(pressedKey, setDirection)

        
        if (movement.consequences.dead) {setIsDead()}   
        if (movement.consequences.chest) {setOpenedChests(movement.position)}   
        if (totalChests === openedChests.total && movement.consequences.door ) {
            setIsWinner();
        }
    }

    return {
        position: position,
        direction: direction,
    }
}

export default useHeroMoviment