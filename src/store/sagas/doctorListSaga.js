import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setDoctorList } from '../actions/userActions';

function* getDoctorList({ payload }) {
  try {
    const { data } = yield call(axios.get, `https://api.allodoc.md/users/get-doctors/?page=1&category=${payload}`);
    yield put(setDoctorList(data.results));
  } catch (error) {
    console.log(error);
  }
}

export default function* doctorListSaga() {
  yield takeLatest(setDoctorList, getDoctorList);
}
