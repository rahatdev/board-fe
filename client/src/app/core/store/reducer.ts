import { IAppState } from "./IAppState";
import { FILTER_BOARDS, GET_BOARDS } from "../../board-snap/board.actions";

const initialState: IAppState = {
    boards: [],
    filteredBoards: [],
    selectedBoard: null
}
function addBoard(state, action){
    return Object.assign({}, state, {
        boards: [...state, action.board]
    })
}

function updateFilteredBoards(state, action){
    return Object.assign({}, state, {
        filteredBoards: [...state.filteredBoards, action.filteredBoards]
    });
}

export function reducer(state: IAppState = initialState, action): IAppState {
    switch (action.type){
        case GET_BOARDS:
            return 
        case FILTER_BOARDS:
            return updateFilteredBoards(state, action)
        default: 
            return state;
    }
}