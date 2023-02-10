import { configureStore } from '@reduxjs/toolkit'
import titlesReducer from './reducers/titlesReducer'

export const store = configureStore({
  reducer: {
      titles: titlesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch