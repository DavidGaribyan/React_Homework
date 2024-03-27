import WrapperMain from '../wrapperMain/WrapperMain.jsx';
import Consultations from './consultations/Consultation.jsx';
import BookDoc from './book/BookDoc.jsx';
import Notes from './notes/notesList/Notes.jsx';
import { bookContentRU, bookContentEN, notesListRU, notesListEN } from '../userData/mainContData.jsx';

export default function MainCont() {
  return (
    <>
      <WrapperMain>
        <Consultations />
      </WrapperMain>
      <WrapperMain>
        <BookDoc {...bookContentRU} />
        <Notes {...notesListRU} />
      </WrapperMain>
    </>
  );
}
