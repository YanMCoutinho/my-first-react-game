import { useContext } from "react";
import { CanvasContext } from "../../contexts/canvas";

import Board from "./Board";
import Debugger from "./Debugger";

function Game() {
    const { canvas } = useContext(CanvasContext)

    return (
        <Debugger canvas={canvas}>
          <Board canvas={canvas} />
        </Debugger>
    )
}

export default Game;