import * as React from 'react'
import TodoListStats from '../components/TodoListStats'
import TodoListFilters from '../components/TodoListFilters'
import TodoList from '../components/TodoList'
import TodoItemCreator from '../components/TodoItemCreator'

const DashboardPage = () => {
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </div>
  )
}

export default DashboardPage