import { userTypes } from '../types';

const doctorList = [];

export default function setDoctorList(state = doctorList, action) {
  switch (action.type) {
    case userTypes.SET_DOCTOR_LIST:
      return action.payload;
    default:
      return state;
  }
}
