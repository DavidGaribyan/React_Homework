import WrapperMain from '../wrapperMain/WrapperMain.jsx';
import Consultations from './consultations/Consultation.jsx';
import BookDoc from './book/BookDoc.jsx';
import Notes from './notes/notesList/Notes.jsx';
import { useContext } from 'react';
import languageContext from '../context/languageContext.jsx';

export default function MainContent() {
  const { language } = useContext(languageContext);
  return (
    <>
      <WrapperMain>
        <Consultations />
      </WrapperMain>
      <WrapperMain>
        <BookDoc initial={language} />
        <Notes initial={language} />
      </WrapperMain>
    </>
  );
}
