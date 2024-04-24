import { doctorListTypes } from '../types';
const initData = {
  doctorList: [],
  error: null,
  loading: true,
};

export default function doctorList(state = initData, action) {
  const { type, payload } = action;

  switch (type) {
    case doctorListTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case doctorListTypes.SUCCESS:
      return {
        ...state,
        doctorList: payload,
        error: null,
        loading: false,
      };
    case doctorListTypes.REJECT:
      return {
        ...state,
        doctorList: [],
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
