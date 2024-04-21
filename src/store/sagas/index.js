import doctorPageSaga from './doctorPageSaga';
import doctorListSaga from './doctorListSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([doctorListSaga(), doctorPageSaga()]);
}
