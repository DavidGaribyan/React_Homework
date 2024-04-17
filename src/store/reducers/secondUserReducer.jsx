import { userTypes } from '../types';

const initDate = {
  secondUserInfo: {},
};

export default function setSecondUser(state = initDate, action) {
  switch (action.type) {
    case userTypes.SET_SECOND_USER:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
