import { saveFinalWasteList, getFinalWasteList } from "../actions/actionsTypes";

const initialState = [];

function finalWasteListReducer(state = initialState, action) {
    switch (action.type) {
        case saveFinalWasteList:
            return action.payload;

        case getFinalWasteList:
            return [...state];
            
        default:
            return state
    }
}

export default finalWasteListReducer