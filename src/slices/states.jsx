import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  backgroundState: false,
  barsState: false,
  registerState: false,
}

export const counterSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    enableBackground: (state) => {
      state.backgroundState = true
    },
    disableBackground: (state) => {
      state.backgroundState = false
    },

    enableSomeThing: (state, name) => {
      state[name.payload] = true
    },
    disableSomeThing: (state, name) => {
      state[name.payload] = false
    },

    disablEveryThing: (state) => {
      state.backgroundState = false
      state.barsState = false
      state.registerState = false
    },
  },
})

export const {
  enableBackground,
  disableBackground,
  disablEveryThing,
  enableSomeThing,
  disableSomeThing,
} = counterSlice.actions

export default counterSlice.reducer
