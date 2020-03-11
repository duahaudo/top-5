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
  switch (action.type) {
    // case constant.ACTION_INIT_DATA: {
    //   // AsyncStorage.setItem("Sti_pictures", JSON.stringify([]))
    //   const { notes, pictures } = action.params
    //   console.log("Note", notes ? notes.length : 0)
    //   console.log("Picture", pictures ? pictures.length : 0)
    //   return {
    //     ...state,
    //     loaded: true
    //   }
    // }
    
    case constant.ACTION_SAVE_ACTION: {
      const newNote: string = action.params;
      let { notes } = state;
      let idx: number = findIndex(notes, (item: INote) => item.id === newNote.id);
      if (idx > -1) {
        notes.splice(idx, 1, newNote)
      } else {
        notes.push(newNote)
      }

      console.log("New Note", JSON.stringify(notes))

      saveAsyncStore("note", notes)

      return {
        ...state,
        notes
      }
    }
    case constant.ACTION_DELETE_NOTE: {
      const noteId: string = action.params;
      let idx: number = findIndex(state.notes, (item: INote) => item.id === noteId);
      state.notes.splice(idx, 1)
      saveAsyncStore("Sti_note", state.notes)
      return {
        ...state,
        timestamps: Date.now()
      }
    }
    case constant.ACTION_SAVE_PICTURE: {
      const { fileName, base64 } = action.params;
      state.pictures.push({
        id: fileName,
        base64
      })

      return { ...state }
    }

    case constant.ACTION_DELETE_PICTURE: {
      const pictureId: string = action.params;
      let idx: number = findIndex(state.pictures, (item: IPicture) => item.id === pictureId);
      state.pictures.splice(idx, 1)
      return {
        ...state,
        timestamps: Date.now()
      }
    }
  }

  return state;
}

export default combineReducers({
  reducer
})