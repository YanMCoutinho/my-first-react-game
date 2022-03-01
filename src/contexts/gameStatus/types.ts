export interface IGameStatusContext {
    dead: boolean;
    setIsDead: () => void;

    winner: boolean;
    setIsWinner: () => void;
}