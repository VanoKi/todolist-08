import type {Todolist} from "../App.tsx";

export type DeleteTodolistAction = ReturnType<typeof DeleteTodolistAC>

// type Actions = DeleteTodolistAction

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

export const DeleteTodolistAC = (id:string) => (
  {type: 'delete_todolist',
    payload: {id: id}
  } as const)