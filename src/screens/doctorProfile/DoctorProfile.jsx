import DoctorProfileBanner from './doctorProfileBanner/DoctorProfileBanner';
import DoctorProfileInfo from './doctorProfileInfo/DoctorProfileInfo';
import './doctorProfile.css';
import { useParams } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import languageContext from '../../components/context/languageContext';

export default function DoctorProfile() {
  const { language, userLanguage } = useContext(languageContext);
  const doctorId = useParams();
  const doctorUserPage = useMemo(() => userLanguage.find((item) => item.id === doctorId.id), [userLanguage, doctorId.id]);

  return (
    <>
      <DoctorProfileBanner initial={{ doctorUserPage, language }} />
      <DoctorProfileInfo initial={language} />
    </>
  );
}
