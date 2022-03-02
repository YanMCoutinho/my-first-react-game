import React, { useContext } from "react";
import { GameStatusContext } from "../../../../contexts/gameStatus";
import { TILE_SIZE } from "../../../../settings/constants";

function GameStatus() {
    const { dead, winner } = useContext(GameStatusContext);

    function reload() {
        window.location.reload();
    }

    function resetGame(message: string) {
        setTimeout(() => {
            alert(message);
            reload();
        }, 180)
    }

    if (dead) {resetGame(`Você perdeu!`)}
    if (winner) {resetGame(`Você ganhou!`)}

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            marginTop: TILE_SIZE * 0.104166667,
            display: 'flex',
            alignItems: 'center',
        }}>
            <button style={{
                color: 'white',
                fontSize: TILE_SIZE * 0.520833333,
                marginLeft: TILE_SIZE * 0.208333333,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
            }} onClick={reload}>
                ↻
            </button>
        </div>
    )
}

export default React.memo(GameStatus)