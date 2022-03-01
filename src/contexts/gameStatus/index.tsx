import React, { createContext, PropsWithChildren, useState } from "react";
import { IGameStatusContext } from "./types";

export const GameStatusContext = createContext<IGameStatusContext>({
    dead: false,
    setIsDead: () => null,
    
    winner: false,
    setIsWinner: () => null,
})

export default function GameStatusProvider(props: PropsWithChildren<{}>) {
    const [chestsState, setChestsState] = useState<IGameStatusContext>({
        dead: false,
        setIsDead: () => {
            setChestsState(prevState => ({...prevState, dead: true}))
        },

        winner: false,
        setIsWinner: () => {
            setChestsState(prevState => ({...prevState, winner: true}))
        },
    });

    return <GameStatusContext.Provider value={chestsState}>{props.children}</GameStatusContext.Provider>
}