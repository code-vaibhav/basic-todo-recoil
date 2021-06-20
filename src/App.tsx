import * as React from 'react'
import TodoList from './components/TodoList'
import TodoItemCreator from './components/TodoItemCreator'
import TodoListFilters from './components/TodoListFilters'
import TodoListStats from './components/TodoListStats'
import './App.css'

const App = () => {
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </>
  )
}

export default App