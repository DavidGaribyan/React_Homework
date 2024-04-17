import { userTypes } from '../types';

const initDate = {
  userInfo: {},
};

export default function setUser(state = initDate, action) {
  switch (action.type) {
    case userTypes.SET_USER:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
