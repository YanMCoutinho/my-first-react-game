export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * TILE_SIZE;

export const HEAD_OFFSET = 12;
export const DEMON_TILE_SIZE = 2 * TILE_SIZE;

export enum EDirection {
    up = 'ArrowUp',
    right = 'ArrowRight',
    left = 'ArrowLeft',
    down = 'ArrowDown'
}

export enum EWalker {
    enemy = 0,
    hero = 1,    
}

export enum ECanvas {
    floor = 0,
    wall = 1,
    door = 2,
    trap = 3,
    miniDemon = 4,
    demon = 5,
    chest = 6,
    hero = 7,
}