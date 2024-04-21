import DoctorProfileBanner from './doctorProfileBanner/DoctorProfileBanner';
import DoctorProfileInfo from './doctorProfileInfo/DoctorProfileInfo';
import './doctorProfile.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doctorInfo } from '../../store/actions/userActions';
import { doctorInfoPageSelector } from '../../store/selectors';

export default function DoctorProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const doctorInfoPageUser = useSelector(doctorInfoPageSelector);

  useEffect(() => {
    dispatch(doctorInfo({ id: id }));
  }, [dispatch, id]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.allodoc.md/users/user/${id}/?role=doctor`)
  //     .then((resp) => {
  //       dispatch(doctorInfoPage(resp.data.results));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id, dispatch]);

  if (!doctorInfoPageUser) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <DoctorProfileBanner initial={doctorInfoPageUser} />
        <DoctorProfileInfo initial={doctorInfoPageUser} />
      </>
    );
  }
}
