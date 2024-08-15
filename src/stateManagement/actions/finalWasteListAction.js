import {saveFinalWasteList , getFinalWasteList} from './actionsTypes';

export const saveTheFinalWasteList = (item) => ({
    type : saveFinalWasteList ,
    payload : item
})

export const getTheFinalWasteList = () => ({
    type : getFinalWasteList
})