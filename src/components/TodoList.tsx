import * as React from 'react'
import { useRecoilValue } from 'recoil'
import * as Selectors from '../selectors/index'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todoList = useRecoilValue(Selectors.filteredTodoListState)
  return (
    <div>
      {todoList.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} />)}
    </div>
  )
}

export default TodoList