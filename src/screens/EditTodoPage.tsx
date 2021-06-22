import * as React from 'react'
import { Input, Button, Row, Col } from 'antd'
import * as Atoms from '../atoms/index'
import { useRecoilState } from 'recoil'

const EditTodoPage = (props: any) => {
  const [todoState, setTodoState] = useRecoilState(Atoms.todoListState)
  let item = todoState.find((todo: Atoms.Item) => todo.id === props.match.params.id)

  const [inputValue, setInputValue] = React.useState(item ? item.text : '')
  const index = todoState.findIndex((listItem: Atoms.Item) => listItem === item)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  
  const onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (item === undefined) {
      return
    }
    const newList = replaceItemAtIndex(todoState, index, {
      ...item,
      text: e.target.todoText.value
    })
    setTodoState(newList)
    props.history.push('/dashboard')
  }

  const removeItem = (_e: React.MouseEvent<HTMLButtonElement>) => {
    const newList = removeItemAtIndex(todoState, index);
    setTodoState(newList)
    props.history.push('/dashboard')
  }

  return (
    <Row>
      <Col>
        <form onSubmit={onFormSubmit}>
          <Row>
            <Col><Input type='text' name='todoText' value={inputValue} onChange={onChange}/></Col>
            <Col><Button type='primary' htmlType='submit'>Save</Button></Col>
          </Row>
        </form>
      </Col>
      <Col><Button type='ghost' onClick={removeItem}>Remove</Button></Col>
    </Row>
  )

  function removeItemAtIndex (arr: Atoms.Item[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index+1)]
  }

  function replaceItemAtIndex (arr: Atoms.Item[], index: number, newValue: Atoms.Item) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index+1)]
  }
}

export default EditTodoPage