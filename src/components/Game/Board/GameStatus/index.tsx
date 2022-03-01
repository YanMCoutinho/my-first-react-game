import React, { useContext } from "react";
import { GameStatusContext } from "../../../../contexts/gameStatus";

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
            marginTop: 5,
            display: 'flex',
            alignItems: 'center',
        }}>
            <button style={{
                color: 'white',
                fontSize: 25,
                marginLeft: 10,
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