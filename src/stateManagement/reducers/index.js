import selectedWasteReducer from "./selectedWasteReducer";
import finalWasteListReducer from "./finalWasteListReducer";
import { combineReducers } from "redux";

export default combineReducers ({
    selectedWaste : selectedWasteReducer,
    finalWasteList : finalWasteListReducer
})