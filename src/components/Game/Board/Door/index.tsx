import React, { useContext } from "react";
import { ChestsContext } from "../../../../contexts/chests";
import { qtTiles, TILE_SIZE } from "../../../../settings/constants";

export default function Door() {
    const { openedChests, totalChests } = useContext(ChestsContext)
    return (
        <>
            {openedChests.total === totalChests && (    
                <img src='./assets/DOOR-OPEN.png' alt='open door' style={{
                    position: 'absolute',
                    top: TILE_SIZE * 0,
                    left: TILE_SIZE * (qtTiles === 20 ? 12 : 2),
                    width: TILE_SIZE * 4,
                    height: TILE_SIZE * 2,
                }}/>
            )}
        </>
    )

}