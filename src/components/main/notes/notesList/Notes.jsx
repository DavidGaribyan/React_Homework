import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import { useContext, useState } from 'react';
import languageContext from '../../../context/languageContext.jsx';

export default function Notes({ initial }) {
  const { userLanguage } = useContext(languageContext);
  let languageContent = initial;
  let [userCard, setUserCard] = useState('1');
  let filter = userLanguage.filter((item) => item.conditionCheck === userCard);
  return (
    <>
      {console.log(userLanguage)}
      <ul className="notes__list">
        <li onClick={() => setUserCard('1')} className="notes__item">
          {languageContent.listItem_1}
        </li>
        <li onClick={() => setUserCard('2')} className="notes__item">
          {languageContent.listItem_2}
        </li>
        <li onClick={() => setUserCard('3')} className="notes__item">
          {languageContent.listItem_3}
        </li>
      </ul>
      <NotesCard user={filter} />
    </>
  );
}
