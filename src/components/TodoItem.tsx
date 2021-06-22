import * as React from 'react'
import {useRecoilState} from 'recoil'
import { Checkbox, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import * as Atoms from '../atoms/index'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const TodoItem = ({item}: {item: Atoms.Item}) => {
  const [todoList, setTodoList] = useRecoilState(Atoms.todoListState)
  const index = todoList.findIndex((listItem: Atoms.Item) => listItem === item)
  
  const toggleItemCompletion = (e: CheckboxChangeEvent) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted
    })
    setTodoList(newList)
  }
  
  return (
    <Row justify='center' align='middle' gutter={8}>
      <Col><Checkbox checked={item.isCompleted} onChange={toggleItemCompletion} /></Col>
      <Col><p>{item.text}</p></Col>
      <Col><Link to={`/edit/${item.id}`}><Button>Edit</Button></Link></Col>
    </Row>
  )  

  function replaceItemAtIndex (arr: Atoms.Item[], index: number, newValue: Atoms.Item) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index+1)]
  }
}

export default TodoItem