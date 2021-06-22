import * as React from 'react'
import { useRecoilValue } from 'recoil';
import * as Selectors from '../selectors/index'
import { Row, Col } from 'antd';

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(Selectors.todoListStatsState)

  const formattedPrecentCompleted = Math.round(percentCompleted);

  return (
    <Row justify='center'>
      <Col>
        <h1>Completed <strong>{totalCompletedNum}</strong> out of <strong>{totalNum}</strong> left <strong>{totalUncompletedNum}</strong> <br/> Percentage completed: <strong>{formattedPrecentCompleted}</strong>%</h1>
      </Col>
    </Row>
  )
}

export default TodoListStats