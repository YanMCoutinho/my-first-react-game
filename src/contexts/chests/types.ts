import { IPosition } from "../canvas/types";

export interface IChestsContext {
    totalChests: number;
    openedChests: {
        total: number;
        positions: IPosition[];
    };
    setOpenedChests: (position: IPosition) => void;
}