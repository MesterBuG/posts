import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'color',
  initialState: {
    color: '',
  },
  reducers: {
    dark: (state) => {

      state.color ='#464646'
    },
    blue: (state) => {
      state.color = '#002aa8'
    },
    yellow: (state, action) => {
      state.color = '#ffcc00'
    },
  },
})

// Action creators are generated for each case reducer function
export const { dark, blue, yellow } = counterSlice.actions

export default counterSlice.reducer