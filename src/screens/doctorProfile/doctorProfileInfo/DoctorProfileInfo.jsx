import WrapperMain from '../../../components/wrapperMain/WrapperMain';
import infoPageCalendar from './doctorProfileInfoIcons/infoPage-calendar.png';
import infoPageEducation from './doctorProfileInfoIcons/infoPage-education.png';
import infoPageMore from './doctorProfileInfoIcons/infoPage-more.png';
import infoPagePlus from './doctorProfileInfoIcons/infoPage-plus.png';

import './doctorProfileInfo.css';
export default function DoctorProfileInfo({ initial }) {
  let doctorUserPageData = initial;
  return (
    <>
      <WrapperMain>
        <div className="doctorProfileInfo__wrapper">
          <ul className="doctorProfileInfo__list">
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageCalendar} alt="icon" className="infoPage__calendar" />
                {doctorUserPageData.doctorUserPageCalendarHeading}
              </p>
              <p>{doctorUserPageData.doctorUserPageCalendarText}</p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageEducation} alt="icon" className="infoPage__calendar" />
                {doctorUserPageData.doctorUserPageEducationHeading}
              </p>
              <p className="doctorProfileInfo__list-text">{doctorUserPageData.doctorUserPageEducationText_1}</p>
              <p>{doctorUserPageData.doctorUserPageEducationText_2}</p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPagePlus} alt="icon" className="infoPage__calendar" />
                {doctorUserPageData.doctorUserPageSpeacalizationHeading}
              </p>
              <p>{doctorUserPageData.doctorUserPageSpeacalizationText} </p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img src={infoPageMore} alt="icon" className="infoPage__calendar" />
                {doctorUserPageData.doctorUserPageMoreHeading}
              </p>
              <p>{doctorUserPageData.doctorUserPageMoreText} </p>
            </li>
          </ul>
        </div>
      </WrapperMain>
    </>
  );
}
