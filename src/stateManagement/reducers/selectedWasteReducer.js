import { addwaste , removewaste } from "../actions/actionsTypes";

const initialState = [];

function selectedWasteReducer (state = initialState , action) {
    switch (action.type) {
        case addwaste:
            return state.concat([action.payload]);

        case removewaste:
            return state.filter((item)=> item.id != action.payload );

        default:
           return state;
    }
}
export default selectedWasteReducer ;