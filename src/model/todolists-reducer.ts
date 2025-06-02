import {v1} from "uuid";
import {Todolist} from "../App.tsx";

const todolistId1 = v1()
const todolistId2 = v1()

const todolists: Todolist[] = ([
  {id: todolistId1, title: 'What to learn', filter: 'all'},
  {id: todolistId2, title: 'What to buy', filter: 'all'},
])

type ActionsType = {
  type: string
  payload: any
}


export const todolistsReducer = (state = todolists, action:ActionsType):Todolist[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST' : {
      return state
    }
    case 'ADD-TODOLIST' : {
      return state
    }
    default: throw new Error(`I don't understand this type`)
  }
}

const action = {
  type: 'todos/todoAdded',
  payload: {
    id: 'abracadabra'
  }
}