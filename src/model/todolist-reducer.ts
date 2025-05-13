import type {Todolist} from "../App.tsx";

export type DeleteTodolistAction = {
  type: 'delete_todolist'
  payload: {
    id: string
  }
}

type Actions = DeleteTodolistAction

const initialState: Todolist[] = []

export const todolistReducer = (todolists: Todolist[] = initialState, action: any): Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' : {
      return todolists.filter(todolist => todolist.id !== action.payload.id)
    }
    default:
      return todolists
  }
}

