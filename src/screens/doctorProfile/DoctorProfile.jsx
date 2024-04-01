import DoctorProfileBanner from './doctorProfileBanner/DoctorProfileBanner';
import DoctorProfileInfo from './doctorProfileInfo/DoctorProfileInfo';
import './doctorProfile.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import languageContext from '../../components/context/languageContext';

export default function DoctorProfile() {
  let { language, userLanguage } = useContext(languageContext);
  let doctorId = useParams('id');
  console.log(doctorId);
  let doctorUserPage = userLanguage.find((item) => item.id === doctorId.id);
  return (
    <>
      <DoctorProfileBanner initial={{ doctorUserPage, language }} />
      <DoctorProfileInfo initial={language} />
    </>
  );
}
