import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITitles } from '../../types/titlesType'

export interface ITitlesState {
  titles: ITitles[] | undefined,
  isLoading: Boolean,
}

const initialState: ITitlesState = {
  titles: [],
  isLoading: false
}

export const titlesReducer = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    addTitleData: (state, action: PayloadAction<ITitles[]>) => {
      state.titles = [
        ...action.payload
      ]
    },
   },
  },
)

export const { addTitleData } = titlesReducer.actions

export default titlesReducer.reducer