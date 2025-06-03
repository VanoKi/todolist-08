import {v1} from "uuid";
import {FilterValues, Todolist} from "../App.tsx";

const todolistId1 = v1()
const todolistId2 = v1()

const todolists: Todolist[] = ([
  {id: todolistId1, title: 'What to learn', filter: 'all'},
  {id: todolistId2, title: 'What to buy', filter: 'all'},
])

export type DeleteTodolistAction = {
  type: 'REMOVE-TODOLIST'
  payload: {
    id: string
  }
}

export type AddTodolistAction = {
  type: 'ADD-TODOLIST'
  payload: {
    title: string
  }
}

export type ChangeTodolistTitleActiontype = {
  type: 'CHANGE-TODOLIST-TITLE'
  payload: {
    id: string
    title: string
  }
}

export type ChangeTodolistFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER'
  payload: {
    id: string
    filter: FilterValues
  }
}

type ActionsType =
  DeleteTodolistAction
  | AddTodolistAction
  | ChangeTodolistTitleActiontype
  |ChangeTodolistFilterActionType


export const todolistsReducer = (state = todolists, action:ActionsType):Todolist[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST' : {
      return state.filter(el => el.id !== action.payload.id)
    }
    case 'ADD-TODOLIST' : {
      const todolistId = v1()
      const newTodolist: Todolist = {id: todolistId, title: action.payload.title, filter: 'all'}
      return [...state, newTodolist]
    }
    case 'CHANGE-TODOLIST-TITLE' : {
      return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
    }
    case 'CHANGE-TODOLIST-FILTER' : {
      // setTodolists(todolists.map(todolist => todolist.id === todolistId ? {...todolist, filter} : todolist))
      return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)
    }
    default: throw new Error(`I don't understand this type`)
  }
}

export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id
    }
  } as const
}

export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      title
    }
  } as const
}

export const changeTodolistAC = (id:string, title:string) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
      id,
      title
    }
  } as const
}