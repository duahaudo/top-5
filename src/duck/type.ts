export interface IState {
  timestamps: number,
  loaded: boolean,
  module: string,
  showLoadingIndicator: boolean,

  todayActions: IAction[]
}

export interface IAction {
  name: string
  description?: string,
  createdTime: string
}

export interface IPicture {
  id: string,
  base64: string
}

export interface IStoreState {
  reducer: IState
}

export interface INote {
  title: string,
  content: string,
  timestamp: number,
  id: string
}