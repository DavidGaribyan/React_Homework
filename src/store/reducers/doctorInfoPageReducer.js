import { userTypes } from '../types';

const initDatePage = {};

export default function doctorInfo(state = initDatePage, action) {
  switch (action.type) {
    case userTypes.SET_SECOND_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
