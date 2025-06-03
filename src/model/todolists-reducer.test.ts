import {v1} from "uuid";
import {Todolist} from "../App.tsx";
import {
  addTodolistAC,
  changeFilterAC,
  changeTodolistAC,
  removeTodolistAC,
  todolistsReducer
} from "./todolists-reducer.ts";
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

  const endState = todolistsReducer(startState, addTodolistAC('New Todolist'))
  expect(endState.length).toBe(3)
  expect(endState[2].title).toBe('New Todolist')
})

test('correct todolist should be change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const endState = todolistsReducer(startState, changeTodolistAC( todolistId2, "New Todolist"))
  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe("New Todolist")
})

test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Todolist[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  const endState = todolistsReducer(startState, changeFilterAC(todolistId2, 'completed'))
  expect(endState[0].filter).toBe('all')
  expect(endState[1].filter).toBe('completed')
})