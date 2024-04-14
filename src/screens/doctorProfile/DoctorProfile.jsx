import DoctorProfileBanner from './doctorProfileBanner/DoctorProfileBanner';
import DoctorProfileInfo from './doctorProfileInfo/DoctorProfileInfo';
import './doctorProfile.css';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export default function DoctorProfile() {
  const { t } = useTranslation();
  const userPageData = t('doctorUserPage.doctorsCards', { returnObjects: true });
  const doctorId = useParams();
  const doctorUserPage = useMemo(() => userPageData.find((item) => item.id === doctorId.id), [userPageData, doctorId.id]);
  return (
    <>
      <DoctorProfileBanner initial={doctorUserPage} />
      <DoctorProfileInfo />
    </>
  );
}
