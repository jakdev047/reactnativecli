import * as requestFromServer from './api';
import {testSlice} from './slice';
const {actions: slice} = testSlice;

export const changeIdAction = (id) => (dispatch) => {
  dispatch(slice.setId(id));
};

export const getDataAction = (id) => (dispatch) => {
  return requestFromServer
    .getData()
    .then((res) => {
      console.log('Data', JSON.stringify(res?.data, null, 2));
    })
    .catch((err) => {
      console.log('Error', err?.message);
    });
};
