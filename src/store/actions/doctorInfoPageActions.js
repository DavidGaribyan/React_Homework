import { doctorInfoPageTypes } from '../types';

const get = (id) => {
  return {
    type: doctorInfoPageTypes.REQUEST,
    payload: id,
  };
};
const success = (data) => {
  return {
    type: doctorInfoPageTypes.SUCCESS,
    payload: data,
  };
};
const error = (error) => {
  return {
    type: doctorInfoPageTypes.REJECT,
    payload: { error },
  };
};

export { get, success, error };
