function getSizes() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    if (width >= 960 && height >= 960) {
        return {TILE_SIZE: 48, qtTiles: 20}
    } else if (width >= 600 && height >= 600) {
        return {TILE_SIZE: 30, qtTiles: 20}
    } else {
        return {TILE_SIZE: 30, qtTiles: 10}
    }
}

export const {TILE_SIZE, qtTiles} = getSizes()
export const GAME_SIZE = TILE_SIZE * qtTiles

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