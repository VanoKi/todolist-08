import type {Todolist} from "../App.tsx";

export type DeleteTodolistAction = {
  type: 'delete_todolist'
  payload: {
    id: string
  }
}

type Actions = DeleteTodolistAction

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