import {saveFile, deleteFile, loadFile, lsDirectory, getAsyncStore, saveAsyncStore} from "./helper"
import {uniqueId} from "lodash"

const createSimpleAction = (type: string) => (params: any) => (dispatch: any, getState: any) => dispatch({type, params});

export const action = {
  VIEW_HOME: 'VIEW_HOME',
  VIEW_DETAIL: 'VIEW_DETAIL',
  
  ACTION_SET_VIEW: 'ACTION_SET_VIEW',
  ACTION_SAVE_ACTION: 'ACTION_SAVE_ACTION'
}

export const moduleName = {
  HOME: 'Top 5'
}

export const setView = createSimpleAction(action.ACTION_SET_VIEW);
export const saveAction = createSimpleAction(action.ACTION_SAVE_ACTION);
