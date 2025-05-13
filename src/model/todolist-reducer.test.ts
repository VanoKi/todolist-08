import {v1} from 'uuid'
import {expect, test} from 'vitest'
import type {Todolist} from "../App.tsx";
import {todolistReducer} from "./todolist-reducer.ts";

test('correct todolist should be deleted', () => {
  const todolistIDd1 = v1()
  const todolistIDd2 = v1()

  const startState: Todolist[] = [
    {id: todolistIDd1, title: 'What to learn', filter: 'all'},
    {id: todolistIDd2, title: 'What to buy', filter: 'all'}
  ]

  const action = {
    type: 'delete_todolist',
    payload: {
      id: todolistIDd1
    }
  } as const

  const endState = todolistReducer(startState, action)

  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistIDd2)
})