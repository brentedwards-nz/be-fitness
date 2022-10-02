import { createSlice } from "@reduxjs/toolkit"

const Action = {
  Add: 0,
  Subtract: 1,
  Multiply: 2,
  Divide: 3
}

const initialState = {
  value: 0,
  lastDelta: 0,
  log: [],
  action: Action.Add
}

const advancedCounterSlice = createSlice({
  name: 'advancedCounter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
      state.lastDelta = action.payload;
      state.log = [...state.log, `Add ${action.payload}`];
      state.action = Action.Add;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      state.lastDelta = action.payload;
      state.log = [...state.log, `Subtract ${action.payload}`];
      state.action = Action.Subtract;
    },
    mulitply: (state, action) => {
      state.value *= action.payload;
      state.lastDelta = action.payload;
      state.log = [...state.log, `Multiply by ${action.payload}`];
      state.action = Action.Multiply;
    },
    divide: (state, action) => {
      state.value /= action.payload;
      state.lastDelta = action.payload;
      state.log = [...state.log, `Divide by ${action.payload}`];
      state.action = Action.Divide;
    },
    reset: (state) => {
      state.count = 0;
      state.lastDelta = 0;
      state.log = [];
      state.action = Action.Add;
    },
  }
})

export const { increment, decrement, multiply, divide } = advancedCounterSlice.actions;

export default advancedCounterSlice.reducer;
