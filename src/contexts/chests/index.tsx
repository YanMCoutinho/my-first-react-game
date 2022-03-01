import React, { createContext, PropsWithChildren } from "react";
import { initialCanvasMap } from "../canvas/helpers";
import { ECanvas } from "../canvas/types";
import { IChestsContext } from "./types";

const numberOfChests: number = Object.keys(initialCanvasMap).reduce((prev, key) => {
    const { tile } = initialCanvasMap[key];

    if (tile === ECanvas.chest) {
        return prev + 1;
    }

    return prev;
}, 0);

export const ChestsContext = createContext<IChestsContext>({
    totalChests: numberOfChests,
    openedChests: { total: 0, positions: [] },

    setOpenedChests: (position) => null,
})

function ChestsProvider(props: PropsWithChildren<{}>) {
    const [chestsState, setChestsState] = React.useState({
        totalChests: numberOfChests,
        openedChests: {
            total: 0,
            positions: []
        },
        setOpenedChests: (heroPosition) => {
            setChestsState(prevState => ({
                ...prevState,
                openedChests: {
                    total: prevState.openedChests.total + 1,
                    positions: prevState.openedChests.positions.concat(heroPosition)
                },
            }));
        },
    });

    return (
        <ChestsContext.Provider value={chestsState} >{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider