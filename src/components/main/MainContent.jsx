import WrapperMain from '../wrapperMain/WrapperMain.jsx';
import Consultations from './consultations/Consultation.jsx';
import BookDoc from './book/BookDoc.jsx';
import Notes from './notes/notesList/Notes.jsx';

export default function MainContent() {
  return (
    <>
      <WrapperMain>
        <Consultations />
      </WrapperMain>
      <WrapperMain>
        <BookDoc />
        <Notes />
      </WrapperMain>
    </>
  );
}
