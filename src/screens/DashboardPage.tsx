import * as React from 'react'
import { Row, Col } from 'antd'
import TodoListStats from '../components/TodoListStats'
import TodoListFilters from '../components/TodoListFilters'
import TodoList from '../components/TodoList'
import TodoItemCreator from '../components/TodoItemCreator'

const DashboardPage = () => {
  return (
    <Row className='dashboard'>
      <Col lg={{offset: 6, span: 12}} offset={2} span={20}>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
        <TodoList />
      </Col>
    </Row>
  )
}

export default DashboardPage