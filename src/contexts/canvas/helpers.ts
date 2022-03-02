import { EDirection, EWalker, qtTiles } from "../../settings/constants"
import { canvasArray, ECanvas, ICanvasMap, IConsequences, IPosition, IWalker } from "./types";

export const initialCanvas = getInitialCanvas();
function getInitialCanvas(): canvasArray {
    const {
        floor: FL,
        wall: WL,
        door: DR,
        trap: TR,
        miniDemon: MD,
        demon: DE,
        chest: CH,
        hero: HE,
    } = ECanvas;

    if (qtTiles === 20) {
        return [
            [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
            [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
            [WL, FL, FL, WL, FL,   FL, FL, FL, WL, FL,   FL, FL, FL, FL, FL,   FL, WL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],

            [WL, FL, TR, FL, FL,   FL, FL, CH, FL, FL,   FL, FL, FL, FL, FL,   MD, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, TR, FL, FL, FL,   FL, FL, TR, FL, FL,   TR, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, TR, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, TR, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],

            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, TR, FL, MD,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, TR, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   TR, CH, FL, FL, WL],

            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, TR,   FL, FL, FL, FL, FL,   FL, FL, FL, TR, FL,   FL, FL, FL, FL, WL],
            [WL, HE, WL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, TR, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL], 
        ]; 
    } else {
        return [
            [WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
            [WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   TR, FL, MD, FL, WL],
            [WL, FL, FL, TR, FL,   FL, FL, FL, FL, WL],

            [WL, FL, CH, FL, FL,   FL, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, CH, FL, WL],
            [WL, HE, FL, TR, FL,   TR, FL, FL, FL, WL],
            [WL, FL, FL, FL, FL,   FL, FL, TR, FL, WL],
            [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL], 
        ];
    }
}

export const initialCanvasMap = getCanvasMap(initialCanvas);
export function getCanvasMap(canvas: canvasArray): ICanvasMap {
    const map: ICanvasMap = {};
    for (let row = 0; row < canvas.length; row++) {
        for (let column = 0; column < canvas[row].length; column++) {
            const position = {x: column, y: row};
            const key = `${column},${row}`;

            map[key] = {tile: canvas[row][column], position: position };
        }
    }

    return map;
}

export function handleWalk(direction: String, position: IPosition): IPosition {
    switch(direction) {
        case EDirection.up:
            return { x: (position.x), y: (position.y - 1) };

        case EDirection.right:
            return { x: (position.x + 1), y: (position.y) };

        case EDirection.down:
            return { x: (position.x), y: (position.y + 1) };
        
        case EDirection.left:
            return { x: (position.x - 1), y: (position.y) };    
    }
}

export function handleNextDirection(direction: String, setDirectionState: Function) {
    if (direction === EDirection.right) {
        setDirectionState(EDirection.right)

    } else if (direction === EDirection.left) {
        setDirectionState(EDirection.left)
    }
}


export function checkNextMoveIsValid (
    canvas: canvasArray,
    position: IPosition,
    walker: IWalker
): IConsequences {
    const nextPosition: ECanvas = canvas[position.y][position.x] as ECanvas;

    let result = walker === EWalker.hero 
        ? getHeroValidMove(nextPosition) 
        : getEnemyValidMove(nextPosition)
    return result;
}

export function getHeroValidMove(position: ECanvas) {
    const  { wall, door, trap, chest, miniDemon, demon } = ECanvas;
    
    console.log('morreu?')
    console.log([ trap, miniDemon, demon ].includes(position))
    console.log(position)

    return {
        valid: ![ wall, door ].includes(position),
        dead: [ trap, miniDemon, demon ].includes(position),
        chest: chest === position,
        door: door === position,
    }
}

export function getEnemyValidMove(position: ECanvas) {
    const { floor, hero } = ECanvas

    return {
        valid: [floor, hero].includes(position),
        dead: hero === position,
        chest: false,
        door: false,
    }
}