import {v1} from 'uuid'
import {expect, test} from 'vitest'
import type {Todolist} from "../App.tsx";
import {DeleteTodolistAC, todolistReducer} from "./todolist-reducer.ts";


test('correct todolist should be created', () => {
  const todolistId1 = v1()
  const todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const title = 'New todolist'
  const endState = todolistsReducer(startState, createTodolistAC(title))

  expect(endState.length).toBe(3)
  expect(endState[2].title).toBe(title)
})