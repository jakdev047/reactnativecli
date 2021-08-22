import {combineReducers} from '@reduxjs/toolkit';
import {testSlice} from '../testSlice/slice';
// import { localStorageSlice } from "../localStorageRedux/Slice";

export const rootReducer = combineReducers({
  test: testSlice.reducer,
});
