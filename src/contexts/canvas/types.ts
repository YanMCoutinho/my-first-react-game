import { EDirection, EWalker } from "../../settings/constants";

export type canvasArray = ECanvas[][];

export type IWalker = EWalker.hero | EWalker.enemy

export interface ICanvasMap {
    [x: string]: {tile: ECanvas, position: IPosition}
}

export interface IPosition {
    x: number;
    y: number;
}

export interface IConsequences {
    valid: boolean;
    dead: boolean;
    chest: boolean;
    door: boolean;
}

export interface ICanvasMoviment {
    position: IPosition,
    consequences: IConsequences,
}

export interface ICanvasContext {
    canvas: canvasArray;
    heroPosition: IPosition;
    setCanvas: (
        direction: EDirection,
        currentPosition: IPosition,
        walker: IWalker
    ) => ICanvasMoviment
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

export interface ICanvasContext {
    canvas: canvasArray,
    setCanvas: (
        direction: EDirection,
        currentPosition: IPosition,
        walker: IWalker
    ) => ICanvasMoviment
}