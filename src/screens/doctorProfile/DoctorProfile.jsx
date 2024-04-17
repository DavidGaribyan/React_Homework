import DoctorProfileBanner from './doctorProfileBanner/DoctorProfileBanner';
import DoctorProfileInfo from './doctorProfileInfo/DoctorProfileInfo';
import './doctorProfile.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export default function DoctorProfile() {
  const dispatch = useDispatch();
  const doctorId = useParams();
  const userDoctor = useSelector((state) => state.secondUserInfo.payload);

  useEffect(() => {
    axios
      .get(`https://api.allodoc.md/users/user/${doctorId.id}/?role=doctor`)
      .then((resp) => {
        dispatch({ type: 'SET_SECOND_USER', payload: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [doctorId, dispatch]);

  if (!userDoctor) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <DoctorProfileBanner initial={userDoctor} />
        <DoctorProfileInfo initial={userDoctor} />
      </>
    );
  }
}
