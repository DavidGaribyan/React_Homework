import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import { useEffect, useState } from 'react';
import WrapperMain from '../../../wrapperMain/WrapperMain.jsx';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { doctorListSelector } from '../../../../store/selectors/doctorListSelector.js';
import { doctorListActions } from '../../../../store/actions';

export default function Notes({ show }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [doctorsCategory, setDoctorsCategory] = useState('1');
  const { loading, doctorList } = useSelector(doctorListSelector);

  useEffect(() => {
    dispatch(doctorListActions.get(doctorsCategory));
  }, [dispatch, doctorsCategory]);

  if (loading) {
    return <p>laoding...</p>;
  } else {
    return (
      <>
        <WrapperMain>
          {show && <p className="notes__heading">{t('doctorCards.myBooks')}</p>}
          <ul className="notes__list">
            <li onClick={() => setDoctorsCategory('1')} className={`notes__item  ${doctorsCategory === '1' ? 'active__yellow' : ''}`}>
              {t('doctorCards.listItem_1')}
            </li>
            <li onClick={() => setDoctorsCategory('2')} className={`notes__item  ${doctorsCategory === '2' ? 'active__green' : ''}`}>
              {t('doctorCards.listItem_2')}
            </li>
            <li onClick={() => setDoctorsCategory('4')} className={`notes__item  ${doctorsCategory === '3' ? 'active__red' : ''}`}>
              {t('doctorCards.listItem_3')}
            </li>
          </ul>
          <NotesCard user={doctorList} />
        </WrapperMain>
      </>
    );
  }
}
