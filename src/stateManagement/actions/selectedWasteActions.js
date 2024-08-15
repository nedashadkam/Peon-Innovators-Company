

import { addwaste , removewaste } from "./actionsTypes"

export const addWaste = (item) => ({
    type: addwaste ,
    payload: item
})
export const removeWaste = (id) => ({
    type: removewaste ,
    payload: id
})