import {v1} from "uuid";
import {Todolist} from "../App.tsx";
import {todolistsReducer} from "./todolists-reducer.ts";
import {expect} from "vitest";
import {test} from 'vitest'

test('correct todolist should be removed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const action = {
    type: 'REMOVE-TODOLIST',
    payload: {
      id: todolistId1
    }
  }

  const endState = todolistsReducer(startState, action)
  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})