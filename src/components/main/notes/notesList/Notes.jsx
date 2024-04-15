import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import { useMemo, useState } from 'react';
import WrapperMain from '../../../wrapperMain/WrapperMain.jsx';
import { useTranslation } from 'react-i18next';

export default function Notes({ show }) {
  const { t } = useTranslation();
  const users = t('doctorUserPage.doctorsCards', { returnObjects: true });
  const [userCard, setUserCard] = useState('1');
  const filteredUserLanguage = useMemo(() => {
    return users.filter((item) => item.conditionCheck === userCard);
  }, [users, userCard]);

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
          <li onClick={() => setUserCard('3')} className={`notes__item  ${userCard === '3' ? 'active__red' : ''}`}>
            {t('doctorCards.listItem_3')}
          </li>
        </ul>
        <NotesCard user={filteredUserLanguage} />
      </WrapperMain>
    </>
  );
}
