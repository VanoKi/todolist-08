import {v1} from 'uuid'
import {expect, test} from 'vitest'
import type {Todolist} from "../App.tsx";
import {createTodolistAC, DeleteTodolistAC, todolistReducer} from "./todolist-reducer.ts";

test('correct todolist should be deleted', () => {
  const todolistIDd1 = v1()
  const todolistIDd2 = v1()

  const startState: Todolist[] = [
    {id: todolistIDd1, title: 'What to learn', filter: 'all'},
    {id: todolistIDd2, title: 'What to buy', filter: 'all'}
  ]

  // const action = {
  //   type: 'delete_todolist',
  //   payload: {
  //     id: todolistIDd1
  //   }
  // } as const

  const action = DeleteTodolistAC(todolistIDd1)

  const endState = todolistReducer(startState, action)

  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistIDd2)
})


test('correct todolist should be created', () => {
  const todolistId1 = v1()
  const todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const title = 'New todolist'
  const endState = todolistReducer(startState, createTodolistAC(title))

  expect(endState.length).toBe(3)
  expect(endState[2].title).toBe(title)
})