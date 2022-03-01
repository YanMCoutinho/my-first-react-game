import React, { createContext, PropsWithChildren, useState } from "react";
import { IGameStatusContext } from "./types";

export const GameStatusContext = createContext<IGameStatusContext>({
    dead: false,
    setIsDead: () => null,
    
    winner: false,
    setIsWinner: () => null,
})

export default function GameStatusProvider(props: PropsWithChildren<{}>) {
    const [gameState, setGameState] = useState<IGameStatusContext>({
        dead: false,
        setIsDead: () => {
            setGameState(prevState => ({...prevState, dead: true}))
        },

        winner: false,
        setIsWinner: () => {
            setGameState(prevState => ({...prevState, winner: true}))
        },
    });

    return <GameStatusContext.Provider value={gameState}>{props.children}</GameStatusContext.Provider>
}