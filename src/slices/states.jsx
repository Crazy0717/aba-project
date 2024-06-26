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

export const { disablEveryThing, enableSomeThing, disableSomeThing } =
  counterSlice.actions

export default counterSlice.reducer
