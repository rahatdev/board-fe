import { Board } from "../models/board";

export interface IAppState {
    boards: Board[],
    filteredBoards: any[],
    selectedBoard: any[]
}