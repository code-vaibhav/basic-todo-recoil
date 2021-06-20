import {selector} from 'recoil'
import * as Atoms from '../atoms/index'

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({get}) => {
    const filter = get(Atoms.todoListFilterState)
    const list = get(Atoms.todoListState)

    switch (filter) {
      case 'show Completed': 
        return list.filter(item => item.isCompleted === true)
      case 'show Uncompleted':
        return list.filter(item => item.isCompleted !== true)
      default:
        return list
    }
  }
})

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({get}) => {
    const todoList = get(Atoms.todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter(item => item.isCompleted === true).length
    const totalUncompletedNum = todoList.filter(item => item.isCompleted === false).length
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    }
  }
})