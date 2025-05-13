import type {Todolist} from "../App.tsx";
import {v1} from "uuid";

export type DeleteTodolistAction = ReturnType<typeof DeleteTodolistAC>
export type createTodolistAction = ReturnType<typeof createTodolistAC>

// type Actions = DeleteTodolistAction | createTodolistAction

const initialState: Todolist[] = []

export const todolistReducer = (todolists: Todolist[] = initialState, action: any): Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' :
      return todolists.filter(todolist => todolist.id !== action.payload.id)
    case 'create_todolist' :
      const {id, title} = action.payload
      return [...todolists, {id: id, title: title, filter: 'all'}]
    default:
      return todolists
  }
}

export const DeleteTodolistAC = (id:string) => (
  {type: 'delete_todolist',
    payload: {id}
  } as const)

export const createTodolistAC = (title: string) => ({
  type: "create_todolist",
  payload: {
    title,
    id: v1()
  }
})