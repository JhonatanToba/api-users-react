import { createSlice } from "@reduxjs/toolkit";


const initial = {
  id: 0,
  user: [{}],
  token: ''
};

const reducers = createSlice({
  name: 'apiUsers',
  initialState: initial,
  reducers: {
    setToken: ( state, action ) => {
      state.token = action.payload
    },
    setId: ( state, action ) => {
      state.id = action.payload
    },
    setUser: ( state, action ) => {
      state.user = [action.payload]
    }
  }
})

export const{ setId, setToken, setUser } = reducers.actions;
export default reducers.reducer;