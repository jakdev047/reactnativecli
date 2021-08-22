import {createSlice} from '@reduxjs/toolkit';

const initState = {
  id: 1,
};

export const testSlice = createSlice({
  name: 'test',
  initialState: initState,
  reducers: {
    setId: (state, action) => {
      const {payload} = action;
      state.id = payload;
    },
  },
});
