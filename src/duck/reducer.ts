import { combineReducers, Action } from "redux";
import { IState, INote, IPicture, IAction as ITodayAction } from "./type"
import { action as constant, moduleName } from "./action"
import { findIndex, uniqueId } from "lodash"
import { saveAsyncStore } from "./helper"

interface IAction {
  type: string,
  params: any
}

const reducer = (state: IState = {
  timestamps: Date.now(),
  module: moduleName.HOME,
  loaded: false,
  showLoadingIndicator: false,
  todayActions: []

}, action: IAction): IState => {
  
  return state;
}

export default combineReducers({
  reducer
})