import * as React from 'react'
import { useRecoilState } from 'recoil'
import * as Atoms from '../atoms/index'

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(Atoms.todoListFilterState)
  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'show All' || e.target.value === 'show Completed' || e.target.value === 'show Uncompleted')
      setFilter(e.target.value)
    else 
      alert("wrong selection")
  }
  
  return (
    <select value={filter} onChange={updateFilter}>
      <option value='show All'>All</option>
      <option value='show Completed'>Completed</option>
      <option value='show Uncompleted'>Uncompleted</option>
    </select>
  )
}

export default TodoListFilters