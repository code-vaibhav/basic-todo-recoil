import * as React from 'react'
import { useRecoilState } from 'recoil'
import { Select } from 'antd'
import * as Atoms from '../atoms/index'
import { SelectValue } from 'antd/lib/select'

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(Atoms.todoListFilterState)
  const updateFilter = (value: SelectValue) => {
    if (value === 'show All' || value === 'show Completed' || value === 'show Uncompleted')
      setFilter(value)
    else 
      alert("wrong selection")
  }

  const { Option } = Select
  
  return (
    <Select value={filter} onChange={updateFilter} style={{margin: '15px 0 0 0'}}>
      <Option value='show All'>All</Option>
      <Option value='show Completed'>Completed</Option>
      <Option value='show Uncompleted'>Uncompleted</Option>
    </Select>
  )
}

export default TodoListFilters