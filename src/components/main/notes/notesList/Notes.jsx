import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import { useEffect, useState } from 'react';
import WrapperMain from '../../../wrapperMain/WrapperMain.jsx';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setDoctorList } from '../../../../store/actions/userActions';
import { doctorListSelector } from '../../../../store/selectors/doctorListSelector.js';

export default function Notes({ show }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [userCard, setUserCard] = useState('4');
  const doctorList = useSelector(doctorListSelector);

  useEffect(() => {
    dispatch(setDoctorList(userCard));
  }, [dispatch, userCard]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.allodoc.md/users/get-doctors/?page=1&category=${userCard}`)
  //     .then((resp) => {
  //       dispatch(setDoctorList(resp.data.results));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [userCard, dispatch]);

  if (doctorList == 4 || doctorList == 1 || doctorList == 2) {
    return <p>laoding...</p>;
  } else {
    return (
      <>
        <WrapperMain>
          {show && <p className="notes__heading">{t('doctorCards.myBooks')}</p>}
          <ul className="notes__list">
            <li onClick={() => setUserCard('1')} className={`notes__item  ${userCard === '1' ? 'active__yellow' : ''}`}>
              {t('doctorCards.listItem_1')}
            </li>
            <li onClick={() => setUserCard('2')} className={`notes__item  ${userCard === '2' ? 'active__green' : ''}`}>
              {t('doctorCards.listItem_2')}
            </li>
            <li onClick={() => setUserCard('4')} className={`notes__item  ${userCard === '3' ? 'active__red' : ''}`}>
              {t('doctorCards.listItem_3')}
            </li>
          </ul>
          <NotesCard user={doctorList} />
        </WrapperMain>
      </>
    );
  }
}
