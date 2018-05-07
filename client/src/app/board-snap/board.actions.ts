import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from "../core/store";
import { BoardService } from "./board.service";

export const GET_BOARDS = 'boards/GET_BOARDS';
export const FILTER_BOARDS = 'boards/FILTER_BOARDS';

@Injectable()
export class BoardActions {

    constructor(
        private boardService: BoardService,
        private ngRedux: NgRedux<IAppState>
    ) { }

    getBoardsForUser(user) {
        this.boardService.getBoardsForUser(null).subscribe(board => {
            this.ngRedux.dispatch({type: GET_BOARDS, board: board})
        })
    }
}