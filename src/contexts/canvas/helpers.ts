import React from "react";
import { ECanvas, EDirection, EWalker } from "../../settings/constants"

export function handleNextMoviment(direction: String, position: {x:number, y:number}) {
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

const FL = ECanvas.floor
const WL = ECanvas.wall
const DR = ECanvas.door
const TR = ECanvas.trap
const MD = ECanvas.miniDemon
const DE = ECanvas.demon
const CH = ECanvas.chest
const HE = ECanvas.hero

export const canvas = [
    [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
    [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, DR, DR,   WL, WL, WL, WL, WL],
    [WL, FL, FL, WL, FL,   FL, FL, FL, WL, FL,   FL, FL, FL, FL, FL,   FL, WL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],

    [WL, FL, TR, FL, FL,   FL, FL, CH, FL, FL,   FL, FL, FL, FL, FL,   MD, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, TR, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, MD, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],

    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, DE,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, MD, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, CH, FL, FL, WL],

    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, TR,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, HE, WL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, FL,   FL, FL, FL, FL, WL],
    [WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL,   WL, WL, WL, WL, WL], 
]

export function validNextPosition (position: {x: number, y:number}, canvas: number[][], walker: EWalker) {
    const nextPositionInCanvas = canvas[position.y][position.x];

    let result = walker === EWalker.hero 
        ? getHeroValidMove(nextPositionInCanvas) 
        : getEnemyValidMove(nextPositionInCanvas)
    return result;
}

export function getHeroValidMove(nextPositionInCanvas: number) {
    return {
        valid: nextPositionInCanvas !== ECanvas.wall,
        dead: nextPositionInCanvas === ECanvas.trap || nextPositionInCanvas === ECanvas.miniDemon || nextPositionInCanvas === ECanvas.demon,
        chest: nextPositionInCanvas === ECanvas.chest,
        door: nextPositionInCanvas === ECanvas.door,
    }
}

export function getEnemyValidMove(nextPositionInCanvas: number) {
    return {
        valid: nextPositionInCanvas === ECanvas.floor || nextPositionInCanvas === ECanvas.hero,
        dead: false,
        chest: false,
        door: false,
    }
}
