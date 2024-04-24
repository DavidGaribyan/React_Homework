import { doctorInfoPageTypes } from '../types';

const data = {
  data: null,
  error: null,
  loading: true,
};

export default function doctorInfoPage(state = data, action) {
  const { type, payload } = action;
  switch (type) {
    case doctorInfoPageTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case doctorInfoPageTypes.SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case doctorInfoPageTypes.REJECT:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
