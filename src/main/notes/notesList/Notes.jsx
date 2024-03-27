import './notes.css';
import NotesCard from '../notesCard/NotesCard.jsx';
import userDataRU from '../../../userData/userDataRU.jsx';
import userDataEN from '../../../userData/userDataEN.jsx';
import { useState } from 'react';

export default function Notes(props) {
  let [userCard, setUserCard] = useState('1');
  let filter = userDataRU.filter((item) => item.conditionCheck === userCard);
  return (
    <>
      <ul className="notes__list">
        <li onClick={() => setUserCard('1')} className="notes__item">
          {props.listItem_1}
        </li>
        <li onClick={() => setUserCard('2')} className="notes__item">
          {props.listItem_2}
        </li>
        <li onClick={() => setUserCard('3')} className="notes__item">
          {props.listItem_3}
        </li>
      </ul>
      <NotesCard user={filter} />
    </>
  );
}
