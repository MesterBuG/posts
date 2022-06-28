import { configureStore } from '@reduxjs/toolkit'
import colorReducer from '../services/colorSlice'

export default configureStore({
  reducer: {
    counter: colorReducer,
  },
})