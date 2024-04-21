import { call, put, takeLatest } from 'redux-saga/effects';
import { doctorInfo } from '../actions/userActions';
import axios from 'axios';
import store from '..';

function* getDoctorPage() {
  try {
    const userId = store.getState().doctorInfoPage.id;
    const response = yield call(axios.get, `https://api.allodoc.md/users/user/${userId}/?role=doctor`);
    const data = response.data;
    yield put(doctorInfo(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* doctorPageSaga() {
  yield takeLatest(doctorInfo, getDoctorPage);
}
