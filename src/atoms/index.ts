import {atom} from 'recoil'

export type Item = {
  id: string;
  text: string;
  isCompleted: boolean;
}

const initialState: Item[] = []

export const todoListState = atom({
  key: "task",
  default: initialState
})

export type filterState = 'show All' | 'show Completed' | 'show Uncompleted'

export const todoListFilterState = atom<filterState>({
  key: "todoListFilterState",
  default: 'show All'
})

export const loginState = atom({
  key: 'loginState',
  default: false
})