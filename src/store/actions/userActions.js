import { userTypes } from '../types';

const setDoctorList = (payload) => {
  return {
    type: userTypes.SET_DOCTOR_LIST,
    payload,
  };
};

const doctorInfo = (payload) => {
  return {
    type: userTypes.SET_SECOND_USER,
    payload,
  };
};

export { setDoctorList, doctorInfo };
