import { userTypes } from '../types';

const setUser = () => {
  return {
    type: userTypes.SET_USER,
    payload: {},
  };
};
const setSecondUser = () => {
  return {
    type: userTypes.SET_SECOND_USER,
    payload: {},
  };
};

export { setUser, setSecondUser };
