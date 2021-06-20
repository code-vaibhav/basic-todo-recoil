import * as React from 'react'
import { useRecoilValue } from 'recoil';
import * as Selectors from '../selectors/index'

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(Selectors.todoListStatsState)

  const formattedPrecentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Item not completed: {totalUncompletedNum}</li>
      <li>percent completed: {formattedPrecentCompleted}</li>
    </ul>
  )
}

export default TodoListStats