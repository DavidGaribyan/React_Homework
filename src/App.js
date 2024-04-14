import Header from './components/header/header.jsx';
import MainContent from './components/main/MainContent.jsx';
import FooterContent from './components/footer/FooterContent.jsx';
import DoctorProfile from './screens/doctorProfile/DoctorProfile.jsx';
import Balance from './screens/balance/Balance.jsx';
import { Route, Routes } from 'react-router-dom';
import Notes from './components/main/notes/notesList/Notes.jsx';
import PageNotFound from './screens/404pageNotFound/PageNotFound.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/myNotes" element={<Notes show={true} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <FooterContent />
    </>
  );
}

export default App;
