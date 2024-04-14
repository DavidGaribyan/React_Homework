import './doctorProfileInfo.css';

import WrapperMain from '../../../components/wrapperMain/WrapperMain';
import infoPageCalendar from './doctorProfileInfoIcons/infoPage-calendar.png';
import infoPageEducation from './doctorProfileInfoIcons/infoPage-education.png';
import infoPageMore from './doctorProfileInfoIcons/infoPage-more.png';
import infoPagePlus from './doctorProfileInfoIcons/infoPage-plus.png';
import { useTranslation } from 'react-i18next';

export default function DoctorProfileInfo() {
  const { t } = useTranslation();
  return (
    <>
      <WrapperMain>
        <div className="doctorProfileInfo__wrapper">
          <ul className="doctorProfileInfo__list">
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageCalendar} alt="icon" className="infoPage__calendar" />
                {t('doctorUserPage.doctorUserPageCalendarHeading')}
              </p>
              <p>{t('doctorUserPage.doctorUserPageCalendarText')}</p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageEducation} alt="icon" className="infoPage__calendar" />
                {t('doctorUserPage.doctorUserPageEducationHeading')}
              </p>
              <p className="doctorProfileInfo__list-text">{t('doctorUserPage.doctorUserPageEducationText_1')}</p>
              <p>{t('doctorUserPage.doctorUserPageEducationText_2')}</p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPagePlus} alt="icon" className="infoPage__calendar" />
                {t('doctorUserPage.doctorUserPageSpeacalizationHeading')}
              </p>
              <p>{t('doctorUserPage.doctorUserPageSpeacalizationText')} </p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageMore} alt="icon" className="infoPage__calendar" />
                {t('doctorUserPage.doctorUserPageMoreHeading')}
              </p>
              <p>{t('doctorUserPage.doctorUserPageMoreText')} </p>
            </li>
          </ul>
        </div>
      </WrapperMain>
    </>
  );
}
