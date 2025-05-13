import type {Todolist} from "../App.tsx";
import {v1} from "uuid";

export type DeleteTodolistAction = ReturnType<typeof DeleteTodolistAC>
export type createTodolistAction = ReturnType<typeof createTodolistAC>

// type Actions = DeleteTodolistAction | createTodolistAction

const initialState: Todolist[] = []

export const todolistReducer = (todolists: Todolist[] = initialState, action: any): Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' : {
      const {id} = action.payload
      return todolists.filter(todolist => todolist.id !== id)
    }
    case 'create_todolist' : {
      const {id, title} = action.payload
      return [...todolists, {id, title, filter: 'all'}]
    }
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