import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import { useContext, useMemo, useState } from 'react';
import languageContext from '../../../context/languageContext.jsx';
import WrapperMain from '../../../wrapperMain/WrapperMain.jsx';

export default function Notes({ initial, show }) {
  const { userLanguage } = useContext(languageContext);
  const languageContent = initial;
  const [userCard, setUserCard] = useState('1');

  const filteredUserLanguage = useMemo(() => {
    return userLanguage.filter((item) => item.conditionCheck === userCard);
  }, [userLanguage, userCard]);

  return (
    <>
      <WrapperMain>
        {show && <p className="notes__heading">{languageContent.myBooks}</p>}
        <ul className="notes__list">
          <li onClick={() => setUserCard('1')} className={`notes__item  ${userCard === '1' ? 'active__yellow' : ''}`}>
            {languageContent.listItem_1}
          </li>
          <li onClick={() => setUserCard('2')} className={`notes__item  ${userCard === '2' ? 'active__green' : ''}`}>
            {languageContent.listItem_2}
          </li>
          <li onClick={() => setUserCard('3')} className={`notes__item  ${userCard === '3' ? 'active__red' : ''}`}>
            {languageContent.listItem_3}
          </li>
        </ul>
        <NotesCard user={filteredUserLanguage} />
      </WrapperMain>
    </>
  );
}
