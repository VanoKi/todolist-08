import {v1} from "uuid";
import {Todolist} from "../App.tsx";
import {addTodolistAC, removeTodolistAC, todolistsReducer} from "./todolists-reducer.ts";
import {expect} from "vitest";
import {test} from 'vitest'

test('correct todolist should be removed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const endState = todolistsReducer(startState, removeTodolistAC(todolistId2))
  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId1)
})

test('correct todolist should be added', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  // const action = {
  //   type: 'ADD-TODOLIST',
  //   payload: {
  //     title: "New Todolist"
  //   }
  // } as const

  // const endState = todolistsReducer(startState, action)
  const endState = todolistsReducer(startState, addTodolistAC('New Todolist'))
  expect(endState.length).toBe(3)
  expect(endState[2].title).toBe(addTodolistAC('New Todolist').payload.title)
})

test('correct todolist should be change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const action = {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
      id: todolistId2,
      title: "New Todolist"
    }
  } as const

  const endState = todolistsReducer(startState, action)
  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(action.payload.title)
})

test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const action = {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
      id: todolistId2,
      filter: 'completed'
    }
  } as const

  const endState = todolistsReducer(startState, action)
  expect(endState[0].title).toBe('all')
  expect(endState[1].title).toBe(action.payload.filter)
})