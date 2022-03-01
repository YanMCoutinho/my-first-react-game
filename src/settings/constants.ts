export const TILE_SIZE = 30;
export const GAME_SIZE = 20 * TILE_SIZE;

export const HEAD_OFFSET = TILE_SIZE * 0.25;
export const DEMON_TILE_SIZE = 2 * TILE_SIZE;

export enum EDirection {
    up = 'ArrowUp',
    right = 'ArrowRight',
    left = 'ArrowLeft',
    down = 'ArrowDown'
}

export enum EWalker {
    enemy = 'enemy',
    hero = 'hero',    
}