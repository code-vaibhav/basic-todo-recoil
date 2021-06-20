import * as React from 'react'
import * as uuid from 'uuid'
import {useSetRecoilState} from 'recoil'
import * as Atoms from '../atoms/index'

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const setTodo = useSetRecoilState(Atoms.todoListState)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
 
  const onClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputValue !== '') {
      setTodo((oldTodoList: Atoms.Item[]) => {
        const newItem = {id: uuid.v4(), text: inputValue, isCompleted: false}
        return [
          ...oldTodoList,
          newItem
        ]
      })
    } else {
      alert("Hey! type something!!!")
    }
    setInputValue('')
  }
  
  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={onClick} >Add</button>
    </div>
  )
}

export default TodoItemCreator