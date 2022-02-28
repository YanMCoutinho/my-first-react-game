import { EDirection } from "../../settings/constants"

export function handleNextMoviment(direction: String, position: {x:number, y:number}) {
    switch(direction) {
        case EDirection.up:
            return {
                x: (position.x), 
                y: (position.y - 1)
            };

        case EDirection.right:
            return {
                x: (position.x + 1), 
                y: (position.y)
            };

        case EDirection.down:
            return {
                x: (position.x), 
                y: (position.y + 1)
            };
        
        case EDirection.left:
            return {
                x: (position.x - 1), 
                y: (position.y)
            };

        
    }
}

export function handleNextDirection(direction: String, setDirectionState: Function) {
    if (direction === EDirection.right) {
        setDirectionState(EDirection.right)

    } else if (direction === EDirection.left) {
        setDirectionState(EDirection.left)
    }
}

/**
 * 1 = WALL
 */

export const canvas = [
    [1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0,   0, 0, 0, 1, 0,   0, 0, 0, 0, 0,   0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],

    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],

    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],

    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1], 
]