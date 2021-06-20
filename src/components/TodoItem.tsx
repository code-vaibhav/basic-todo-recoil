import * as React from 'react'
import {useRecoilState} from 'recoil'
import * as Atoms from '../atoms/index'

const TodoItem = ({item}: {item: Atoms.Item}) => {
  const [todoList, setTodoList] = useRecoilState(Atoms.todoListState)
  const index = todoList.findIndex((listItem: Atoms.Item) => listItem === item)
  
  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value
    })
    setTodoList(newList)
  }
  
  const deleteItem = (_e: React.MouseEvent<HTMLButtonElement>) => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList)
  }

  const toggleItemCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted
    })
    setTodoList(newList)
  }
  
  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input type='checkbox' checked={item.isCompleted} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>Remove</button>
    </div>
  )

  function removeItemAtIndex (arr: Atoms.Item[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index+1)]
  }

  function replaceItemAtIndex (arr: Atoms.Item[], index: number, newValue: Atoms.Item) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index+1)]
  }
}

export default TodoItem