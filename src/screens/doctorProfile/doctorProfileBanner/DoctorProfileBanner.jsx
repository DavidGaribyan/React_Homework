import Wrapper from '../../../components/header/headerWrapper/Wrapper';
import bannerArrow from './bannerArrow.png';
import './doctorProfileBanner.css';

export default function DoctorProfileBanner({ initial }) {
  let doctorUserData = initial.doctorUserPage;
  let doctorPageData = initial.language;
  return (
    <>
      <div className="doctorProfile__wrapper">
        <Wrapper>
          <div className="doctorBanner__info-wrapper">
            <div className="banner__links">
              <p>{doctorPageData.doctorUserPageDoctors}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{doctorPageData.doctorUserPageProffesion}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{doctorPageData.doctorUserPageProfile}</p>
            </div>
            <div className="profile__banner-info">
              <img src={doctorUserData.avatar} alt="icon" className="banner__avatar" />
              <div className="profile__banner-info-text">
                <p className="doctorBanner__info-doctorName">{doctorUserData.doctorName}</p>
                <p className="doctorBanner__info-doctorStaff">{doctorUserData.staff}</p>
                <p className="doctorBanner__info-doctorStage">{doctorUserData.stage}</p>
              </div>
            </div>
          </div>
          <div className="profile__banner-price-info">
            <p className="profile__banner-price">{doctorPageData.doctorUserPagePrice}</p>
            <p>{doctorPageData.doctorUserPageTime}</p>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
