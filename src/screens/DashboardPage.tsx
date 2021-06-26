import * as React from 'react'
import { Row, Col, Space } from 'antd'
import TodoListStats from '../components/TodoListStats'
import TodoListFilters from '../components/TodoListFilters'
import TodoList from '../components/TodoList'
import TodoItemCreator from '../components/TodoItemCreator'

const DashboardPage = () => {
  return (
    <Row className='dashboard'>
      <Col lg={{offset: 4, span: 16}} offset={2} span={20}>
        <Space direction='vertical' style={{width: '100%'}}>
          <TodoListStats />
          <TodoListFilters />
          <TodoItemCreator />
          <TodoList />
        </Space>
      </Col>
    </Row>
  )
}

export default DashboardPage