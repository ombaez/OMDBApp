import { SET_USER, SET_USERCHECK, SET_USERADDCHECK,CREATE_USER,LIST_ALLUSERS } from '../constants';

const initialState = {
  userlogged: {},
  userCheck: '',
  allUsers: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { userlogged: action.user });
    case SET_USERCHECK:
      return Object.assign({}, state, { userCheck: action.check });
    case LIST_ALLUSERS:
      return Object.assign({}, state, { allUsers: action.users });
    default:
      return state;
  }
}