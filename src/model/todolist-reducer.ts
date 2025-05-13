import type {Todolist} from "../App.tsx";

type Actions = {
  type: string
  payload: any
}

const initialState: Todolist[] = []

export const todolistReducer = (state: Todolist[] = initialState, action: any): any => {
  switch (action.type) {
    case 'delete_todolist' : {
      return state.filter(todolist => todolist.id !== action.payload.id)
    }
    default:
      return state
  }
}