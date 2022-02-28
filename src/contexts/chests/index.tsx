import React from "react";

interface IProps {
    children: React.ReactNode;
}

export const ChestsContext = React.createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        positions: []
    },
    setOpenedChests: () => null
})

function ChestsProvider(props: IProps) {
    const [chestsState, setChestsState] = React.useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        setOpenedChests: () => {
            console.log()
        }
    })

    return (
        <ChestsContext.Provider value={chestsState} >{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider