import type {FilterValues, Todolist} from "../App.tsx";
import {v1} from "uuid";

export type DeleteTodolistAction = ReturnType<typeof DeleteTodolistAC>
export type createTodolistAction = ReturnType<typeof createTodolistAC>
export type changeTodoListTitle = ReturnType<typeof createTodolistAC>

// type Actions = DeleteTodolistAction | createTodolistAction | changeTodoListTitle

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
    case 'change_todolists_title' : {
      const {id, title} = action.payload
      return todolists.map(tl => tl.id === id ? {...tl, title} : tl)
    }
    case 'change_todolist_filter' : {
      const {id, filter} = action.payload
      return todolists.map(tl => tl.id === id ? {...tl, filter} : tl)
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
} as const)

export const changeTodoListTitleAC = (payload: {id:string, title:string}) => ({
  type: 'change_todolists_title',
  payload
} as const)

export const changeTodolistFilterAC = (payload: {id: string, filter: FilterValues}) => ({
  type: 'change_todolist_filter',
  payload
} as const)