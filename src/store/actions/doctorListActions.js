import { doctorListTypes } from '../types';

const get = (category) => {
  return {
    type: doctorListTypes.REQUEST,
    payload: category,
  };
};
const success = (data) => {
  return {
    type: doctorListTypes.SUCCESS,
    payload: data,
  };
};
const error = (error) => {
  return {
    type: doctorListTypes.REJECT,
    payload: error,
  };
};

export { get, success, error };
